import { portfolioFont } from "@/utils/fonts";
import "./style.css";
import { Footer } from "@/components";
import { getApiUrl } from "@/lib/getApiUrl";

export const dynamic = 'force-dynamic';

const getTnC = async (slug) => {
  try {
    const baseUrl = await getApiUrl();
    const response = await fetch(
      `${baseUrl}/api/${slug}`, {cache: 'no-store'}
    );

    if (!response.ok) {
      throw new Error("Error while fetching terms and conditions.");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);
    return { term: { content: { html: "" } } };
  }
};

const TnC = async () => {
  const content = await getTnC('terms-and-conditions');

  return (
    <>
    <div className={`${portfolioFont.className} policy-container`}>
      <div className="custom_header">
        <h1>Site Terms.</h1>
        <p>Read Carefully.</p>
      </div>

      <div className="section_container">
        <h2 className="title">Terms & Conditions</h2>
        <div className="section-inner">
          <p>
            Welcome to my Design Portfolio Website. By accessing and using this
            Website, you agree to comply with and be bound by the following
            terms and conditions. If you do not agree with these terms, please
            refrain from using the Website.
          </p>
          <div
            className="terms-conditions"
            dangerouslySetInnerHTML={{ __html: content.term.content.html }}
          ></div>
        </div>
      </div>
    </div>
    
    <Footer /></>
  );
};

export default TnC;
