export default function GuestLayout({ children }) {
    return (
        <div className={`w-full min-h-screen bg-center bg-cover bg-[url('/storage/hixbd8bp6d.webp')] flex`}>
            <div className="m-auto w-[400px] p-[40px] bg-[rgba(0,0,0,.5)] box-border shadow rounded-[10px]" style={{ boxShadow: "0 15px 25px rgba(0,0,0,.6)" }}>
                {children}
            </div>
        </div>
    );
}
