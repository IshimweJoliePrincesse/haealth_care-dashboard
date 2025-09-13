import Image from "next/image";

interface Profile {
    name: string,
    profilePhoto: string,
    title: string
};

interface ProfileProps {
    profile: Profile
};

const Profile: React.FC<ProfileProps> = ({profile}) => {
    return (
        <div className="flex flex-row gap-2 items-center justify-end h-full">
            <div className="hover:cursor-pointer">
                <Image
                    src= {profile.profilePhoto}
                    width={45}
                    height={45}
                    alt="Profile Photo"
                    priority= {true}
                    className="rounded-full w-auto h-auto"
                />
            </div>
            <div className="flex flex-col justify-between py-2 pr-2 border-r border-r-2 border-customAsh h-full">
                <h1 className="text-sm font-bold text-left">{profile.name}</h1>
                <h1 className="text-sm text-left">{profile.title}</h1>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <div>
                    <Image
                        src= '/SettingsIcon.svg'
                        width={18}
                        height={18}
                        alt="Settings"
                        priority= {true}
                        className="hover:cursor-pointer hover:bg-activeState hover:rounded-full w-auto h-auto"
                    />
                </div>
                <div>
                    <Image
                        src= '/MoreVertical.svg'
                        width={4}
                        height={18}
                        alt="More"
                        priority= {true}
                        className="hover:cursor-pointer hover:bg-activeState w-auto h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;