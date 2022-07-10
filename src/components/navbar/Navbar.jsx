import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="serach">
          <input type="text" placeholder="Search .." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListNumberedRtlIcon className="icon"/>
          </div>
          <div className="item">
            <img
            src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=1024"
            alt=""
            className="avatar"
             />
          </div>
        </div>
      </div>
    </div>
  )
}
