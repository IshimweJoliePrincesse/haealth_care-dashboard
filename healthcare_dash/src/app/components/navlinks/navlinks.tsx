import Image from "next/image";

interface NavLink {
    name: string;
    src: string;
    label: string;
};

interface NavLinksProps {
    navLinks: NavLink[]
};

const NavLinks: React.FC<NavLinksProps> = ({navLinks}) => {
    return (
        <div className="flex flex-row gap-4 justify-center">
            {navLinks.map(({name, src, label}) => {
                return (
                    <div className="flex flex-row gap-2 p-2 hover:cursor-pointer hover:bg-activeState hover:rounded-full" key={name}>
                        <Image
                            src={src}
                            width={20}
                            height={20}
                            alt={name}
                            priority= {true}
                            className="h-auto"
                        />
                        <h1 className="hidden md:block text-sm font-bold text-left">{label}</h1>
                    </div>
                )
            })}
        </div>
    );
};

export default NavLinks;