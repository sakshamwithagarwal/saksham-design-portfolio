import { Footer } from "@/components";
import "./style.css";
import { portfolioFont } from "@/utils/fonts";

const getPrivacy = async (slug) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/${slug}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Error while fetching privacy policy.");
  }

  return response.json();
};

const PrivacyPolicy = async () => {
  const content = await getPrivacy("privacy-policy");
  const getDate = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  };
  return (
    <>
      <div className={`${portfolioFont.className} policy-container`}>
        <div className="custom_header">
          <h1>Privacy.</h1>
          <p>Read Carefully.</p>
        </div>

        <div className="section_container">
          <h2 className="title">Privacy Policy</h2>
          <div className="section-inner">
            <div className="static-content">
              <p>Last Updated: {getDate()}</p>
              <p>
                Welcome to Saksham's Design Portfolio Website. This Privacy
                Policy outlines how we collect, use, and safeguard personal
                information obtained through the use of our Website.
              </p>
              <p> We do not collect Information</p>
            </div>
            <div
              className="privacy-policy"
              dangerouslySetInnerHTML={{ __html: content.term.content.html }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
