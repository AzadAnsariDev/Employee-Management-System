extend: {
  keyframes: {
    glow: {
      "0%, 100%": {
        boxShadow: "0 0 20px rgba(0,255,255,0.4), 0 0 40px rgba(0,150,255,0.3)",
        transform: "scale(1)"
      },
      "50%": {
        boxShadow: "0 0 35px rgba(0,255,255,0.8), 0 0 70px rgba(0,150,255,0.6)",
        transform: "scale(1.01)"
      }
    }
  },
  animation: {
    glow: "glow 3s ease-in-out infinite",
  }
}
