import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';
import { toast } from 'react-toastify';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email: user.email,
            name: user.displayName,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://agile-plains-88208.herokuapp.com/order', order)
            .then(response =>{
                // console.log(response);
                const {data} = response;
                if (data.insertedId) {
                    toast('Your order is has been booked');
                    event.target.reset();
                }
            })

    }
    return (
        <div className='w-50 m-5 mx-auto'>
            <h2>{service.name}  Checkout</h2>
            <form onSubmit={handlePlaceOrder} >
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='Email' required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" name="name" placeholder='Name' value={user?.displayName} required readOnly disabled /> <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='Service' readOnly /> <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required /> <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required /> <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;




/*Option 

const [user, setUser] = useState({
    name: 'karim', email: "k@gmail.com", address: "feni", phone: '0196544255'
});
const handleAddressChange = event => {
    console.log(event.target.value);
    const { address, ...rest } = user;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    console.log(newUser);
    setUser(newUser);
} */