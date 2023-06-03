
export const infoSideBar=[
    {
        id: "button-parkings",
        name :"Parqueaderos",
        page:"/Parkings",
        icon :"faLocationDot",
        profile:['user_role','admin_role','sadmin_role']
    },
    {
        id: "button-parkings",
        name :"Sucursal",
        icon :"faLocationDot",
        page: "/Subsidiary",
        profile :['admin_role','sadmin_role']
    },
    {
        id: "button-addCar",
        name :"Registra tu vehículo",
        icon :"faCarSide",
        page: "/AddVehicle",
        profile:['user_role']
    },
    {
        id: "button-makeReservation",
        name :"Reserva tu cupo",
        icon :"faCirclePlus",
        page: "/MakeReservation",
        profile:['user_role']
    },
    {
        id: "button-reservations",
        name :"Tus reservas",
        icon :"faRectangleList",
        page: "/YourReservations",
        profile:['user_role']
    },
    {
        id: "button-vehicles",
        name :"Vehículos registrados",
        icon :"faTable",
        page: "/YourVehicles",
        profile:['user_role']
    },
    {
        id: "button-cards",
        name :"Registra tarjetas",
        icon :"faCirclePlus",
        page: "/RegisterCard",
        profile:['user_role']
    },
    {
        id: "button-statistics",
        name :"Estadísticas",
        icon :"faChartLine",
        page: "/Statistics",
        profile:['admin_role','sadmin_role']
    },
    {
        id: "button-historial",
        name :"Historial",
        icon :"faAddressCard",
        page: "/Historial",
        profile:['admin_role']
    },
    {
        id: "button-registerCustomer",
        name :"Registrar cliente",
        icon :"faUserPlus",
        page: "/RegisterCustomer",
        profile:['admin_role']
    },
    {
        id: "button-logOut",
        name :"Cerrar sesión",
        icon :"faRightToBracket",
        page: "/",
        profile :['user_role','admin_role','sadmin_role']
    }
]