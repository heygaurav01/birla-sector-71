import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "@/components/Footer";

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
            <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                    <div className="bg-slate-900 text-white px-8 py-6">
                        <h1 className="text-3xl font-bold tracking-tight">Disclaimer & Privacy Policy</h1>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* Disclaimer Section */}
                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b pb-2">Disclaimer</h2>
                            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-600">
                                <p className="mb-4">
                                    <span className="font-bold text-slate-800">DLF :</span> This website is meant only for information purposes. It should not be considered/ claimed as an official site. This website belongs to the authorised channel partner of DLF. Agent RERA No.: RC/REA/HARERA/GGM/1306/901/2020
                                </p>
                            </div>
                        </section>

                        {/* Privacy Policy Section */}
                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b pb-2">Privacy Policy</h2>
                            <div className="prose prose-slate max-w-none text-sm leading-relaxed text-gray-600 space-y-4">
                                <p>
                                    DLF (that is, our subsidiaries, our ultimate holding company and its subsidiaries) ("we", "our", "us") are committed to protecting and respecting your privacy. This privacy policy (together with our terms of use and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting <a href="https://dlf-project.in/DlfPrivana/Authorisedchannelpartner/" className="text-blue-600 hover:underline">https://dlf-project.in/DlfPrivana/Authorisedchannelpartner/</a>, or any other of Our websites / mobile applications to which this privacy policy applies ("Sites") or otherwise providing us with information you are accepting and consenting to the practices described in this policy.
                                </p>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">Updation of privacy policy</h3>
                                <p>
                                    This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.
                                </p>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">INFORMATION WE MAY COLLECT FROM YOU</h3>
                                <p>We May Collect And Process The Following Data About You:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <span className="font-semibold">i) Information you give us.</span> You may give us information about you by filling in forms on our project sites, or by submitting your CV, or by corresponding with us by phone, e-mail or otherwise or, by you interacting with any of our business partners, suppliers or sub-contractors (including estate agents, sales agents and our professional advisors) engaged on our behalf. This includes information you provide when you register to use our sites, subscribe to our service, email us, arrange property viewings with us, request brochures from us, complete an enquiry form, provide your CV and when you report a problem with our sites. The information you give us may include your name, address, e-mail address, phone number, profile picture and any other information relevant to your enquiry or request for information or services which we may request and you may choose to provide to us from time to time. In addition to the aforesaid, you may choose to import your address book contacts or enter your contacts' information manually to access certain features of the Sites.
                                    </li>
                                    <li>
                                        <span className="font-semibold">ii) Information we collect about you.</span> We may automatically collect: technical information, including the IP address, your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform; and information about your visit, including the full URL clickstream to, through and from our sites; materials you viewed or searched for; page response times, download errors, length of visits to certain pages, page interaction information, and methods used to browse away from the page and any phone number used to call our customer service number.
                                    </li>
                                    <li>
                                        <span className="font-semibold">iii) Information we receive from other sources.</span> We may receive information about you if you use our sites or the other services we provide. In this case we will have informed you when we collected that data that it may be shared internally and combined with data collected on our sites. We also work closely with third parties (including, for example, business partners, sub-contractors in technical, payment and delivery services, advertising networks, analytics providers, search information providers, credit reference agencies) and may receive information about you from them.
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">We Use Information Held About You In The Following Ways:</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <span className="font-semibold">i) Information you give to us.</span> We will use this information: to carry out our obligations arising from any contracts entered into between you and us and to provide you with the information and services that you request from us relating to the projects, properties, ventures or opportunities detailed on our sites or otherwise notified to you; to provide you with information about other goods and services we offer that are similar to those that you have already purchased or enquired about; to provide you, or permit selected third parties to provide you, with information about opportunities, goods or services we feel may interest you. If you are an existing customer, we will only contact you by e-mail, Whatsapp, SMS, telephone or your preferred method of contact if different, with information about opportunities, goods and services similar to those which were the subject of a previous sale or negotiations of a sale to you. If you are a new customer, and where we permit third parties to use your data, we (or they) will contact you by e-mail, Whatsapp, SMS, telephone or your preferred method of contact if different only if you have consented to this.
                                    </li>
                                    <li>
                                        <span className="font-semibold">ii) Information we collect about you.</span> We will use this information: to administer our sites and for internal operations, including troubleshooting, data analysis, testing, research, statistical and survey purposes; to improve our sites to ensure that content is presented in the most effective manner for you and for your computer; to allow you, when required, to participate in interactive features of our service; as part of our efforts to keep our sites safe and secure; to measure or understand the effectiveness of advertising we serve to you and others, and to deliver relevant advertising to you; to make suggestions and recommendations to you and other users of our sites about goods or services that may interest you or them.
                                    </li>
                                    <li>
                                        <span className="font-semibold">iii) Information we receive from other sources.</span> We may combine this information with information you give to us and information we collect about you. This includes but is not limited to information we receive from our sales agents. We may use this information and the combined information for the purposes set out above (depending on the types of information we receive).
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">DISCLOSURE OF YOUR INFORMATION</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <span className="font-semibold">A)</span> We may share your personal information with any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries.
                                    </li>
                                    <li>
                                        <span className="font-semibold">B)</span> We may share your information with selected third parties including, where applicable:
                                        <ul className="list-[circle] pl-5 mt-1 space-y-1">
                                            <li>i. Business partners, suppliers and sub-contractors (including, but not limited to, estate agents, sales agents and our professional advisors) for the performance of any contract or any potential contract we may enter into with them or you, or in relation to any ancillary requirements;</li>
                                            <li>ii. Advertisers and advertising networks that require the data to select and serve relevant adverts to you and others; and</li>
                                            <li>iii. Analytics and search engine providers that assist us in the improvement and optimisation of our sites.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-semibold">C)</span> We may disclose your personal information to third parties:
                                        <ul className="list-[circle] pl-5 mt-1 space-y-1">
                                            <li>i. If we sell or buy any business or assets, we may disclose your personal data to the prospective seller or buyer of such business or assets;</li>
                                            <li>ii. If Asiana Amarah or substantially all of its assets are acquired by a third party, your personal data will be one of the transferred assets; and</li>
                                            <li>iii. If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply our terms of use and other agreements; or to protect the rights, property, or safety of Asiana Amarah, our customers, or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="font-semibold">D)</span> We may share your non sales related information such as Cookies, Email IDs, Phone number etc to external parties. But, we do not share your sales related information such as PAN Card No, Credit / Debit Card details, Preference details with the external parties.
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">COOKIES</h3>
                                <p>
                                    Our sites may use cookies to distinguish you from other users of our sites. This helps us to provide you with a good experience when you browse our sites and also allows us to improve our sites. By continuing to browse our sites, you are agreeing to our use of cookies. A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive. We use cookies that are required for the operation of our sites (they include, for example, cookies that enable you to log into the secure area of our sites); to allow us to recognise and count the number of visitors and to see how visitors move around our sites when they are using it; to recognise you when you return to our sites in order to enable us to personalise our content for you; to record your visit to our sites, the pages you have visited and the links you have followed in order to make our sites more relevant to your interests. Further information about the individual cookies we use on our sites and the purposes for which we use them can be found here. Please note that third parties may also use cookies, over which we have no control. You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
                                </p>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">YOUR RIGHTS</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <span className="font-semibold">A)</span> You have the right to ask us not to process your personal data for marketing purposes.
                                    </li>
                                    <li>
                                        <span className="font-semibold">B)</span> Our sites may contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
                                    </li>
                                </ul>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">CONTACT</h3>
                                <p>
                                    Questions, comments and requests regarding this privacy policy Contact Us.
                                </p>

                                <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">WHERE WE STORE YOUR PERSONAL DATA</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                        <span className="font-semibold">A)</span> The data that we collect from you may be transferred, stored and processed by staff who work for us or for one of our suppliers or one of our group companies. Such staff maybe engaged in, among other things, the fulfilment of your order or enquiry and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely.
                                    </li>
                                    <li>
                                        <span className="font-semibold">B)</span> We have put in place appropriate technical and organisational measures to guard against unauthorised or unlawful processing of personal data and accidental loss or destruction of, or damage to, personal data. Unfortunately, the transmission of information via the internet is not completely secure and we cannot guarantee the security of your data transmitted to our sites and any transmission is at your own risk.
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Disclaimer />
    </React.StrictMode>
);
