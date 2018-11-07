function calculateTip(amount, rating) {
  return rating.toLowerCase() === 'terrible' ? 0 :
    rating.toLowerCase() === 'poor' ? Math.ceil(amount * .05) :
      rating.toLowerCase() === 'good' ? Math.ceil(amount * .1) :
        rating.toLowerCase() === 'great' ? Math.ceil(amount * .15) :
          rating.toLowerCase() === 'excellent' ? Math.ceil(amount * .2) :
            "Rating not recognised"
}
