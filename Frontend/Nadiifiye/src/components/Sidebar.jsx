import { ChevronFirst, ChevronLast } from "lucide-react"
import logo from "../assets/Logo.jpeg"
import profile from "../assets/react.svg"
import { createContext, useContext, useState } from "react"
import { AuthContext, useAuth } from '../utility/UserContext';


const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const { userId, usrType, username  } = useAuth()
    const [expanded, setExpanded] = useState(false)
    return (
      <>
        <aside className="h-screen  ">
          <nav className="h-full  flex flex-col bg-white border-r shadow-sm mr-10">
            <div className="p-4 pb-2 flex justify-between items-center">
              <img
                src={logo}
                className={`overflow-hidden transition-all ${
                  expanded ? "w-32" : "w-0"
                }`}
              />
              <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
              >
                {expanded ? <ChevronFirst /> : <ChevronLast />}
              </button>
            </div>

            <SidebarContext.Provider value={{ expanded }}>
              <ul className="flex-1 px-3">{children}</ul>
            </SidebarContext.Provider>

            <div className="border-t flex p-3">
              {/* <p>Log Out Btn</p> */}
              <img src={profile} className="w-10 h-10 rounded-md" />
              <div
                className={`flex justify-between items-center overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3" : "w-0"
                } `}
              >
                <div className="leading-4">
                  <h4 className="font-semibold">{username}</h4>
                  
                </div>

                <button
                  type="button"
                  className="inline-block rounded bg-green-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </aside>
      </>
    );
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
}