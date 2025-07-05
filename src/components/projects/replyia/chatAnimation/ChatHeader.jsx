import { FaUserCircle, FaCommentDots } from "react-icons/fa";
import {RiRobot3Fill} from "react-icons/ri";
import {useTranslation} from "react-i18next";

const ChatHeader = () => {
    const { t } = useTranslation("whatsapp");

    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-t-xl border border-gray-200">
            <div className="flex items-center gap-3">
                <RiRobot3Fill className="text-4xl text-gray-600 rounded-full border-2 border-gray-600 p-1" />
                <div>
                    <p className="text-base lg:text-lg font-semibold">{t('chatSimulation.botName')}</p>
                    <p className="text-xs lg:text-sm text-green-500">online</p>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;