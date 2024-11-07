import { Link } from "react-router-dom";

const Nav = () => {
    const content = (
        <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
                <ul className="text-center text-xl p-20">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="/contact">Contact</Link>
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
                            <Link to="/about">
                                <li className="hover:text-amber-300 ">About</li>
                            </Link>
                            <Link to="/catalog">
                                <li className="hover:text-amber-300 ">Catalog</li>
                            </Link>
                            <Link to="/contact">
                                <li className="hover:text-amber-300 ">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
