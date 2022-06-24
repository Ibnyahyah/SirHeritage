import React from "react";

export default function Faqs() {
  const [firstFaq, setFirstFaq] = React.useState(false);
  const [secondFaq, setSecondFaq] = React.useState(false);

  function FirstFaq() {
    setFirstFaq(!firstFaq);
    setSecondFaq(false);
  }
  function SecondFaq() {
    setSecondFaq(!secondFaq);
    setFirstFaq(false);
  }
  return (
    <div className="bg-white pt-5 pb-5">
      <div className="faqs pt-3 pb-4">
        <h1 className="text-center text-white">FAQS</h1>
        <div className="line"></div>
        <div className="container display-f align-items-center justify-content-center mt-4 text-white">
          <div className="col-8-md">
            <div className="faqs-header">
              <div>
                <div className=" display-f justify-content-space-between align-items-center">
                  <h2 className="font-regular">How do I get my wears?</h2>
                  {!firstFaq ? (
                    <img
                      src="./openIcon.png"
                      width="40px"
                      alt=""
                      onClick={FirstFaq}
                    />
                  ) : (
                    <img
                      src="./closeIcon.png"
                      width="40px"
                      alt=""
                      onClick={FirstFaq}
                    />
                  )}
                </div>
                {firstFaq && (
                  <div>
                    <p className="mt-1">
                      There are four steps to get your wears:
                    </p>
                    <ol style={{ listStyle: "decimal" }}>
                      <li>Choose your style</li>
                      <li>Make an appointment to take your measurements</li>
                      <li>Negotiations on price.</li>
                      <li>Make payments and complete your order.</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
            <div className="faqs-header mt-2">
              <div>
                <div className=" display-f justify-content-space-between align-items-center">
                  <h2 className="font-regular">
                    What happens when I don’t like my outfit?
                  </h2>
                  {!secondFaq ? (
                    <img
                      src="./openIcon.png"
                      width="40px"
                      alt=""
                      onClick={SecondFaq}
                    />
                  ) : (
                    <img
                      src="./closeIcon.png"
                      width="40px"
                      alt=""
                      onClick={SecondFaq}
                    />
                  )}
                </div>
                {secondFaq && (
                  <div>
                    <p className="mt-1">
                      We make provisions for you to choose your own style as we
                      do not know your desired style.. Picking your outfits is
                      entirely your choice to make
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="">
              <h2 className="font-regular">
                What happens when I don’t like my outfit?
              </h2>
              <p>
                We make provisions for you to choose your own style as we do not
                know your desired style.. Picking your outfits is entirely your
                choice to make
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
