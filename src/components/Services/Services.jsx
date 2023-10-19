
import {FaMoneyBillTrendUp} from 'react-icons/fa6';
import {FaTools} from 'react-icons/fa';
import {GrUserWorker} from 'react-icons/gr';
import {BsFillCarFrontFill,BsPersonWorkspace} from 'react-icons/bs';


const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto place-items-center mb-40 mt-14 gap-4">
            <div className="h-[200px] w-[240px] bg-amber-50 py-20 shadow-xl shadow-slate-500 rounded-3xl hover:bg-amber-400"><h2 className="text-2xl font-semibold font-Oxanium text-center text-orange-900 "><FaMoneyBillTrendUp className='mx-auto text-4xl'></FaMoneyBillTrendUp>Auto Financing</h2></div>
            <div className=" h-[200px] w-[240px] bg-amber-50 py-20 shadow-xl shadow-slate-500 rounded-3xl hover:bg-amber-400"><h2 className="text-2xl font-semibold font-Oxanium text-center text-orange-900"><FaTools className='mx-auto text-4xl'></FaTools>Parts Repairing</h2></div>
            <div className="h-[200px] w-[240px] bg-amber-50 py-20 shadow-xl shadow-slate-500 rounded-3xl hover:bg-amber-400"><h2 className="text-2xl font-semibold font-Oxanium text-center  text-orange-900"><BsPersonWorkspace className='mx-auto text-4xl'></BsPersonWorkspace>Car Inspection</h2></div>
            <div className="h-[200px] w-[240px] bg-amber-50 py-20 shadow-xl shadow-slate-500 rounded-3xl hover:bg-amber-400"><h2 className="text-2xl font-semibold font-Oxanium text-center  text-orange-900"><BsFillCarFrontFill className='mx-auto text-4xl'></BsFillCarFrontFill>Vehicle Trade-in</h2></div>
             
            
        </div>
    );
};

export default Services;