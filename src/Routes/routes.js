import React from "react";
// Pages
const Landingpage = React.lazy(() => import("../pages/landingPage/Landingpage"));
const AboutusPage = React.lazy(() => import("../pages/Aboutus/AboutusPage"))
const Couses = React.lazy(() => import("../pages/couses/Couses"))
const Sample = React.lazy(() => import("../pages/sample"))
const CollegeView = React.lazy(() => import("../pages/CollegeView/CollegeView"))
const WebinarRegistration = React.lazy(() => import("../pages/studyabroad/WebinarRegistration"))
const AbroadUniversity = React.lazy(() => import("../pages/AbroadUnisersity/AbroadUniversity"))
const PrivacyPolicy = React.lazy(() => import("../pages/PrivacyPolicy/PrivacyPolicy"))
const AUpayment = React.lazy(() => import('../pages/AUpayment/AUpayment'))
const signup = React.lazy(() => import("../components/SignUp/SignUp"))
const MobileMenu = React.lazy(() => import("../components/MobilestudyAbroad/MobileMenu"))
const BApayment = React.lazy(() => import("../pages/BApayment/BApayment"))
const Google = React.lazy(() => import('../pages/GooglePay/Gpay'))
const BharathidasanUniversity = React.lazy(() => import('../pages/BharathidasanUniversity/BharathidasanUniversity'))
const AndhraUniversity = React.lazy(() => import('../pages/Andhra-University/Andhra-University'))
const MGRuniversity = React.lazy(() => import('../pages/MGRuniversity/MGRuniversity'))
const ManipalUniversity = React.lazy(() => import('../pages/ManipalUniversity/ManipalUniversity'))
const JainOnline = React.lazy(() => import('../pages/JainOnline/JainOnline'))
const GoldenGateUniversity = React.lazy(() => import('../pages/GoldenGateUniversity/GoldenGateUniversity'))
const IIITBangalore = React.lazy(() => import('../pages/IIITBangalore/IIITBangalore'))
const BIMTECH = React.lazy(() => import('../pages/BIMTECH/BIMTECH'))
const Liba = React.lazy(() => import('../pages/Liba/Liba'))
const ClarkUniversity = React.lazy(() => import('../pages/ClarkUniversity/ClarkUniversity'))
const InternationalUniversity = React.lazy(() => import('../pages/InternationalUniversity/InternationalUniversity'))
const ESDESBusinessSchool = React.lazy(() => import('../pages/ESDESBusinessSchool/ESDESBusinessSchool'))
const Aivancity = React.lazy(() => import('../pages/Aivancity/Aivancity'))
const NortheasternUniversity = React.lazy(() => import('../pages/NortheasternUniversity/NortheasternUniversity'))
const HaagaHeliaUniversity = React.lazy(() => import('../pages/HaagaHeliaUniversity/HaagaHeliaUniversity'))
const VaasaUniversity = React.lazy(() => import('../pages/VaasaUniversity/VaasaUniversity'))
const MetropoliaUniversity = React.lazy(() => import('../pages/MetropoliaUniversity/MetropoliaUniversity'))
const SeinajokiUniversity = React.lazy(() => import('../pages/SeinajokiUniversity/SeinajokiUniversity'))
const InternationalBusinessUniversity = React.lazy(() => import('../pages/InternationalBusinessUniversity/InternationalBusinessUniversity'))
const ColoradoStateUniversity = React.lazy(() => import('../pages/ColoradoStateUniversity/ColoradoStateUniversity'))
const UniversityCourses = React.lazy(() => import('../pages/Adv/UnivercityCourses'))
const PGDM = React.lazy(() => import('../pages/Adv/pgdm'))
const BDU = React.lazy(() => import('../pages/Adv/BDU'))


const routes = [
  { path: "/", name: "landingpage", element: Landingpage, exact: true },
  { path: "/about", name: "AboutUsPage", element: AboutusPage, exact: true },
  { path: "/Couses", name: "manipal", element: Couses, exact: true },
  { path: "/sample", name: "manipal", element: Sample, exact: true },
  { path: "/collegeview", name: "manipal", element: CollegeView, exact: true },
  { path: "/WebinarRegistration", name: "manipal", element: WebinarRegistration, exact: true },
  { path: "/abroad/view", name: "manipal", element: AbroadUniversity, exact: true },
  { path: "/privacypolicy", name: "manipal", element: PrivacyPolicy, exact: true },
  { path: "/Andhra-University/Payment", name: "manipal", element: AUpayment, exact: true },
  { path: "/Bharathidasan-University/Payment", name: "manipal", element: BApayment, exact: true },
  { path: "/signup", name: "manipal", element: signup, exact: true },
  { path: "/menu", name: "manipal", element: MobileMenu, exact: true },
  { path: "/gpay", name: "manipal", element: Google, exact: true },
  { path: "/University/BharathidasanUniversity", name: "manipal", element: BharathidasanUniversity, exact: true },
  { path: "/University/AndhraUniversity", name: "manipal", element: AndhraUniversity, exact: true },
  { path: "/University/MGRuniversity", name: "manipal", element: MGRuniversity, exact: true },
  { path: "/University/ManipalUniversity", name: "manipal", element: ManipalUniversity, exact: true },
  { path: "/University/JainOnline", name: "manipal", element: JainOnline, exact: true },
  { path: "/University/GoldenGateUniversity", name: "manipal", element: GoldenGateUniversity, exact: true },
  { path: "/University/IIITBangalore", name: "manipal", element: IIITBangalore, exact: true },
  { path: "/University/BIMTECH", name: "manipal", element: BIMTECH, exact: true },
  { path: "/University/Liba", name: "manipal", element: Liba, exact: true },
  { path: "/University/ClarkUniversity", name: "manipal", element: ClarkUniversity, exact: true },
  { path: "/University/InternationalUniversity", name: "manipal", element: InternationalUniversity, exact: true },
  { path: "/University/ESDESBusinessSchool", name: "manipal", element: ESDESBusinessSchool, exact: true },
  { path: "/University/Aivancity", name: "manipal", element: Aivancity, exact: true },
  { path: "/University/NortheasternUniversity", name: "manipal", element: NortheasternUniversity, exact: true },
  { path: "/University/HaagaHeliaUniversity", name: "manipal", element: HaagaHeliaUniversity, exact: true },
  { path: "/University/VaasaUniversity", name: "manipal", element: VaasaUniversity, exact: true },
  { path: "/University/MetropoliaUniversity", name: "manipal", element: MetropoliaUniversity, exact: true },
  { path: "/University/SeinajokiUniversity", name: "manipal", element: SeinajokiUniversity, exact: true },
  { path: "/University/InternationalBusinessUniversity", name: "manipal", element: InternationalBusinessUniversity, exact: true },
  { path: "/University/ColoradoStateUniversity", name: "manipal", element: InternationalBusinessUniversity, exact: true },
  { path: "/hcm/liba", name: "HCM", element: UniversityCourses, exact: true },
  { path: "/PGDM/liba", name: "PGDM", element: PGDM, exact: true },
  { path: "/BDU", name: "PGDM", element: BDU, exact: true },
];

export default routes;


