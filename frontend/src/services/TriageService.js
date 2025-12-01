/**
 * TriageService
 * Helper to construct the LLM prompt for emergency triage.
 */

export const TriageService = {
  /**
   * Construct the JSON prompt for the LLM.
   * @param {string} symptoms 
   * @param {string} vitals 
   * @param {Array} nearbyFacilities 
   * @returns {object} The prompt object
   */
  constructPrompt(symptoms, vitals, nearbyFacilities) {
    // Limit facilities to top 5 to save context window
    const topFacilities = nearbyFacilities.slice(0, 5).map((f, index) => ({
      index: index,
      id: f.id,
      name: f.name,
      type: f.type,
      distance_m: Math.round(f.distance_m),
      phone: f.phone
    }));

    return {
      role: "system",
      content: "You are an emergency medical triage assistant. Analyze the user's symptoms and the provided list of nearby facilities. Return a strict JSON object with the recommended action. Do not invent information.",
      instructions: "1. Analyze 'symptoms' and 'vitals'.\n2. Determine severity: CRITICAL (life-threatening), URGENT (needs prompt care), or ROUTINE.\n3. Select the best facility from 'nearby_facilities' based on the action.\n4. Output strict JSON.",
      input_schema: {
        symptoms: symptoms,
        vitals: vitals || "Not provided",
        nearby_facilities: topFacilities
      },
      output_schema: {
        action: "CALL_AMBULANCE | GO_ER | VISIT_CLINIC | HOME_CARE",
        reason: "string (concise explanation)",
        confidence: "number (0-1)",
        recommended_facility_index: "number (index in nearby_facilities array, or -1 if none)",
        emergency_number_to_call: "string (e.g. '911' or facility phone if appropriate)"
      }
    };
  }
};
