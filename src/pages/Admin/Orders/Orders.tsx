import { useTranslation } from 'react-i18next'
import AdminHeader from '../../../components/Admin/Shared/AdminHeader'
import trash from '../../../assets/icons/admin/delete.svg'
import HelmetLib from '../../../components/Shared/HelmetLib/HelmetLib'

const Orders = () => {
  const { t } = useTranslation()
  return (
    <div>

      <HelmetLib title="Admin-Orders" />
      <AdminHeader variant='Orders' text={t('adminSidebarOrders')} />


      <main className='h-[calc(100vh-210px)] mt-5'>


      <table className="min-w-full bg-white">
  <thead className="h-16 text-center text-sm not-italic font-semibold leading-6">
    <tr>
      <td>{t('ProfileMenuOrderTableThId')}</td>
      <td>{t('ProfileMenuOrderTableCustomerId')}</td>
      <td>{t('ProfileMenuOrderTableThTime')}</td>
      <td>{t('ProfileMenuOrderTableThDeliveryAddress')}</td>
      <td>{t('ProfileMenuOrderTableThPayment')}</td>
      <td>{t('ProfileMenuOrderTableThAmount')}</td>
      <td>{t('ProfileMenuOrderTableThContact')}</td>
    </tr>
  </thead>
  <tbody>
    
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