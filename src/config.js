const returnUrl = () => {
    return process.env.HOST || 'http://localhost:3030';
  }
  
  exports.returnUrl = returnUrl;
