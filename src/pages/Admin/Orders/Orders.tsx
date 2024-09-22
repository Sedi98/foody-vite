
import AdminHeader from '../../../components/Admin/Shared/AdminHeader'
import trash from '../../../assets/icons/admin/delete.svg'

const Orders = () => {
  return (
    <div>
      <AdminHeader text='Orders' />


      <main className='h-[calc(100vh-210px)] mt-5'>


      <table className="min-w-full bg-white">
  <thead className="h-16 text-center text-sm not-italic font-semibold leading-6">
    <tr>
      <td>ID</td>
      <td>Customer ID</td>
      <td>Time</td>
      <td>Delivery Address</td>
      <td>Payment Method</td>
      <td>Amount</td>
      <td>Contact</td>
    </tr>
  </thead>
  <tbody>
    <div className="Toastify"></div>
    <tr className="h-14 text-center border-slate-700 border-y text-gray-900 text-sm not-italic font-normal leading-5">
      <td>
        <div>
          <p className="border-slate-700 border rounded-lg ml-2">ImBbKYKIwMB3B29VurH4</p>
        </div>
      </td>
      <td>
        <div className="flex justify-center">
          <p className="border-slate-700 border rounded-lg px-2">Hkk06fqjXLVj1xsLgKDLeTyYAZD3</p>
        </div>
      </td>
      <td>9 minutes ago</td>
      <td>Khirdalan</td>
      <td>Pay Cash</td>
      <td>2222$</td>
      <td>994517970292</td>
      <td>
        <img
          alt=""
          loading="lazy"
          width="24"
          decoding="async"
          className="cursor-pointer"
          src={trash}
          style={{ color: "transparent" }}
        />
      </td>
    </tr>

   
  </tbody>
</table>



      </main>
    </div>
  )
}

export default Orders