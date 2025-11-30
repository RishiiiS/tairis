const supabase = require('../config/supabase');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      return res.status(400).json({ msg: error.message });
    }

    // User profile creation is now handled by a Supabase Database Trigger

    res.status(201).json({ msg: "User registered! Please check your email to verify your account.", user: data.user });

  } catch (err) {
    res.status(500).json({ msg: "Error", error: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ msg: error.message });
    }

    res.json({ msg: "Login successful", token: data.session.access_token, user: data.user });
  } catch (err) {
    res.status(500).json({ msg: "Error", error: err.message });
  }
};

module.exports = {
  register,
  login
}