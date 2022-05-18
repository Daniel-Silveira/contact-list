import Contacts from "@/pages/Contacts";
import { FiUsers } from "react-icons/fi";

const sidebarRoutes = [
  {
    path: "/",
    main: Contacts,
    title: "Contatos",
    icon: FiUsers,
  },
];

export default sidebarRoutes;
