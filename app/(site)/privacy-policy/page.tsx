import ReactMarkdown from "react-markdown";
import { getPageContent } from "../../lib/pages";

import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PrivacyPolicyPage() {
  const content = await getPageContent("privacy-policy");

  return (
    <div className="max-w-site-w mx-auto px-site-px py-12">
      <div className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
