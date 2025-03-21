import axios from "axios";

const AuthButton = () => {
  // Handle Google OAuth login
  const handleAuthClick = async () => {
    try {
      // const response = await axios.get("https://telemedx.onrender.com/auth/google");
      const response = await axios.get("http://localhost:4000/auth/google");
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleAuthClick}
        className="px-6 py-2 text-white font-semibold bg-gradient-to-r from-green-500 to-green-700 
                   rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
                   hover:from-green-600 hover:to-green-800 active:scale-95"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default AuthButton;
