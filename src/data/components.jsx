import Parking from '../components/general/Parking';
import RegisterVehicles from '../components/customer/RegisterVehicles'
import MakeReservation from '../components/customer/Reservations/MakeReservation';
import YourReservations from '../components/customer/Reservations/YourReservations';
import YourVehicles from '../components/customer/YourVehicles';
import Historial from '../components/administration/Historial';
import Statistics from '../components/administration/Statistics';
import RegisterCustomer from '../components/administration/RegisterCustomer';
import RegisterCard from '../components/customer/RegisterCard';


export const components=[
    {
        component: Parking,
        path:"/Parkings",
    },
    {
        component: RegisterVehicles,
        path:"/AddVehicle",
    },
    {
        component: MakeReservation,
        path:"/MakeReservation",
    },
    {
        component: YourReservations,
        path:"/YourReservations",
    },
    {
        component: YourVehicles,
        path:"/YourVehicles",
    },
    {
        component: Historial,
        path:"/Historial",
    },
    {
        component: Statistics,
        path:"/Statistics",
    },
    {
        component: RegisterCustomer,
        path:"/RegisterCustomer",
    },
    {
        component: RegisterCard,
        path:"/RegisterCard",
    }
    
    
]