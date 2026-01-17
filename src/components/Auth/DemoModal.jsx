const DemoModal = ({ close }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      
      <div className="bg-white w-[400px]  p-6 rounded-xl shadow-xl relative">
        
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-700 hover:text-black cursor-pointer"
        >
          ✕
        </button>

        <h3 className="text-lg font-semibold mb-4">
          Demo Login Credentials
        </h3>

        <div className="text-sm space-y-4">

          {/* Admin */}
          <div>
            <p className="font-semibold">Admin</p>
            <p>Email: admin@me.com</p>
            <p>Password: 123</p>
          </div>

          {/* Employees */}
          <div>
            <p className="font-semibold">Employees</p>
            <p>e1@e.com – e5@e.com</p>
            <p>Password: 123</p>
          </div>

          {/* GitHub README */}
          <div className="pt-2 border-t border-slate-700">
            <a
              href="https://github.com/AzadAnsariDev/Employee-Management-System/blob/main/README.md"
              target="_blank"
              className="text-blue-400 underline"
            >
              For more details, read GitHub README
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoModal
