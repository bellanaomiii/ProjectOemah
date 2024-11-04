import { Link } from "react-router-dom";

const Nav = () => {
    const content = (
        <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
                <ul className="text-center text-xl p-20">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="About">About</Link>
                    </li>
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="Catalog">Catalog</Link>
                    </li>
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="Contacts">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
    
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">OEMAH</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                                <Link to="About">
                                <li className="hover:text-yellow-500 transition border-b-2 border-slate-900">About</li>
                                </Link>
                                <Link to="Catalog">
                                <li className="hover:text-yellow-500 transition border-b-2 border-slate-900">Catalog</li>
                                </Link>
                                <Link to="Contacts">
                                <li className="hover:text-yellow-500 transition border-b-2 border-slate-900">Contact</li>
                                </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
