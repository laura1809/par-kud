
export const infoSideBar=[
    {
        id: "button-parkings",
        name :"Parqueaderos",
        page:"/Parkings",
        icon :"faLocationDot",
        profile:['cliente','admin','superAdmin']
    },
    {
        id: "button-addCar",
        name :"Registra tu vehículo",
        icon :"faCarSide",
        page: "/AddVehicle",
        profile:['cliente']
    },
    {
        id: "button-makeReservation",
        name :"Reserva tu cupo",
        icon :"faCirclePlus",
        page: "/MakeReservation",
        profile:['cliente']
    },
    {
        id: "button-reservations",
        name :"Tus reservas",
        icon :"faRectangleList",
        page: "/YourReservations",
        profile:['cliente']
    },
    {
        id: "button-vehicles",
        name :"Vehículos registrados",
        icon :"faTable",
        page: "/YourVehicles",
        profile:['cliente']
    },
    {
        id: "button-statistics",
        name :"Estadísticas",
        icon :"faChartLine",
        page: "/Statistics",
        profile:['admin','superAdmin']
    },
    {
        id: "button-historial",
        name :"Historial",
        icon :"faAddressCard",
        page: "/Historial",
        profile:['admin']
    },
    {
        id: "button-registerCustomer",
        name :"Registrar cliente",
        icon :"faUserPlus",
        page: "/RegisterCustomer",
        profile:['admin']
    },
    {
        id: "button-logOut",
        name :"Cerrar sesión",
        icon :"faRightToBracket",
        page: "/Login",
        profile :['cliente','admin','superAdmin']
    }
]