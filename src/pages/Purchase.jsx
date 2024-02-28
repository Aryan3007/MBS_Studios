/* eslint-disable react/no-unescaped-entities */
const Purchase = () => {
  return (
    <div className="h-full flex justify-center items-center w-full">
      <img
        className=" opacity-60"
        src="https://xxboxnews.blob.core.windows.net/prod/sites/2/2022/09/FREESTYLIN_FINAL_LANDSCAPE_1920X1080_JPG-9928423d535d3d18f841.jpg"
        alt=""
      />
      <div className="login-box">
        <p>Buy Now</p>
        <form>
          <div className="flex-1 my-6">
            <label className="text-black" htmlFor="country">
              Country
            </label>
            <select
              className="w-full h-10 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              id="country"
            >
              <option value="IN">India</option>
              <optgroup label="Africa">
                <option value="AF">Afghanistan</option>
                <option value="DZ">Algeria</option>
                <option value="AO">Angola</option>
                ...
                <option value="ZW">Zimbabwe</option>
              </optgroup>
              <optgroup label="Asia">
                <option value="IN">India</option>
                <option value="AM">Armenia</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BH">Bahrain</option>
                ...
                <option value="YE">Yemen</option>
              </optgroup>
              <optgroup label="South America">
                <option value="AR">Argentina</option>
                <option value="BO">Bolivia</option>
                <option value="BR">Brazil</option>
                ...
                <option value="VE">Venezuela</option>
              </optgroup>
              ...
            </select>
          </div>
          <div className="flex-1 my-6">
            <label className="text-black" htmlFor="country">
              Country
            </label>
            <select
              className="w-full h-10 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              id="country"
            >
              <option value>PS5</option>
              <option value="AF">PS4</option>
              <option value="DZ">X-Box One</option>
              <option value="AO">X-Box Series X|S</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>
          <div className="flex-1 my-6">
            <label className="text-black" htmlFor="country">
              Country
            </label>
            <select
              className="w-full h-10 bg-white rounded-md border-gray-300 text-black px-2 py-1"
              id="country"
            >
              <option value="IN">DIGITAL EDITION</option>

              <option value="AF">CROSS-GEN DELUXE EDITION</option>
            </select>
          </div>

          <a href="#">
            <span />
            <span />
            <span />
            <span />
            Purchase
          </a>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
