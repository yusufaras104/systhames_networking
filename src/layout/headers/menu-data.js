import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "HOME",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "COMPANY",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/pdf/systhamesPDF", title: "Catalogue" }, 
    ],
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "STRUCTURED CABLING",
    link: "/service/structured-cabling",
    active: "",
    sub_menus: [
      { link: "/service/structured-cabling/keystone/", title: "Keystone" },
      {link: "/service/strucured-cabling/patch_cord/", title: "Patch Cord"},
      {link: "/strucured-cabling/patch-panel", title: "Patch Panel"},
      {link: "/strucured-cabling/cable", title: "Cable"},
      {link: "/strucured-cabling/tool", title: "Tool"},
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "PARTNER PROGRAMME",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/team", title: "Team" }, 
      { link: "/team-details", title: "Team Details" },
      { link: "/404", title: "404" }, 
    ],
  }
  

];
export default menu_data;
