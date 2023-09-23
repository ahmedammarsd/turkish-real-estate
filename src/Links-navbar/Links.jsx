import { BiHomeSmile , BiBuildingHouse } from "react-icons/bi";
import { MdMiscellaneousServices , MdOutlineVilla , MdOutlineMapsHomeWork , MdOutlineApartment} from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi" ;
import { BsReverseLayoutTextSidebarReverse , BsClockHistory , BsBuildings } from "react-icons/bs";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
import { DiGhostSmall } from "react-icons/di";


export const linksNavbar = [
    {
        icon: <BiHomeSmile />,
        name:"main",
        to:"/",
    },
    {
        icon: <BiBuildingHouse />,
        name:"realEstate",
        to:"/real-estate",
    },
    {
        icon: <MdMiscellaneousServices />,
        name:"ourServices",
        to:"/our-services",
    },
    {
        icon: <HiOutlineNewspaper />,
        name:"news",
        to:"/news-and-articles",
    },
    {
        icon: <BsReverseLayoutTextSidebarReverse />,
        name:"articles",
        to:"/articles",
    },
    // {
    //     icon: <BsClockHistory />,
    //     name:"reminder",
    //     to:"/reminder",
    // }   
];

export const subLinks = [
    {
        nameSub: "test one",
        toSub: "test-one"
    },
    {
        nameSub: "test two",
        toSub: "test-two"
    },
    {
        nameSub: "test three",
        toSub: "test-three"
    },

];


export const realEstateTypes = [
    {
        type: "all",
        icon: <DiGhostSmall />,
        value: ""
    },
    {
        type: "residential",
        icon: <BsBuildings />,
        value: "سكني"
    },
    {
        type: "commercial",
        icon: <CiMoneyBill />,
         value: "تجاري"
    },
    {
        type: "lands",
        icon: <IoTabletLandscapeOutline />,
         value: "ارض"
    },
    {
        type: "buildings",
        icon: <BsBuildings />,
         value: "مبنى"
    },
    {
        type: "villas",
        icon: <MdOutlineVilla />,
         value: "فيلا"
    },
    {
        type: "houses",
        icon: <MdOutlineMapsHomeWork />,
         value: "شقة"
    },
    {
        type: "apartments",
        icon: <MdOutlineApartment />,
         value: "منزل"
    },
];



