
const Hero = () => {

  let date = new Date();

    return (
        <div>
          <h2>Welcome to CurrencyPal. Your handy live currency conversion and exchange rate web app.</h2>
          <p>{date.toDateString()}</p>
        </div>
    );
    
}

export default Hero;