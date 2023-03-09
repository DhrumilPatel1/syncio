import React from 'react';
import { classNames } from 'primereact/utils';
import { Link } from 'react-router-dom';
import AppBreadcrumb from './AppBreadcrumb';
import AppMenu from './AppMenu';
import { RadioButton } from 'primereact/radiobutton';

const AppTopbar = (props) => {
    const profileItemClassName = classNames('profile-item', { 'active-menuitem fadeInDown': props.topbarUserMenuActive });

    return (
        <div className="layout-topbar">
            <div className="topbar-left">
                <button type="button" className="menu-button p-link" onClick={props.onMenuButtonClick}>
                    <i className="pi pi-chevron-left"></i>
                </button>

                <Link to="/">
                    <img id="logo-horizontal" className="horizontal-logo" src="assets/layout/images/logo-white.svg" alt="diamond-layout" />
                </Link>

                <span className="topbar-separator"></span>

                <div className="layout-breadcrumb viewname" style={{ textTransform: 'uppercase' }}>
                    <AppBreadcrumb meta={props.meta} />
                </div>

                <img id="logo-mobile" className="mobile-logo" src="assets/layout/images/logo-dark.svg" alt="diamond-layout" />
            </div>

            <AppMenu
                model={props.menu}
                menuMode={props.menuMode}
                active={props.menuActive}
                mobileMenuActive={props.staticMenuMobileActive}
                onMenuClick={props.onMenuClick}
                onMenuitemClick={props.onMenuitemClick}
                onRootMenuitemClick={props.onRootMenuitemClick}
            ></AppMenu>

            <div className="layout-mask modal-in"></div>

            <div className="topbar-right">
                <ul className="topbar-menu">
                    {/* <li className="search-item">
                        <button type="button" className="p-link" onClick={props.onSearchClick}>
                            <i className="pi pi-search"></i>
                        </button>
                    </li> */}
                    <li>
                        {props.colorScheme === 'dark' ? (
                            <RadioButton className="pi pi-moon light_dark_theme text-2xl" name="colorScheme" value="light" checked={props.colorScheme === 'light'} inputId="theme3" onChange={props.changeColorScheme} />
                        ) : (
                            <RadioButton className="pi pi-sun light_dark_theme text-2xl" name="colorScheme" value="dark" checked={props.colorScheme === 'dark'} inputId="theme1" onChange={props.changeColorScheme} />
                        )}
                    </li>

                    <li className={profileItemClassName}>
                        <button type="button" className="p-link" onClick={props.onTopbarUserMenu}>
                            <img src="assets/demo/images/avatar/profile.jpg" alt="diamond-layout" className="profile-image" />
                            <span className="profile-name">Amelia Stone</span>
                        </button>
                        <ul className="profile-menu fade-in-up">
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-user"></i>
                                    <span>Profile</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-cog"></i>
                                    <span>Settings</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-calendar"></i>
                                    <span>Calendar</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-inbox"></i>
                                    <span>Inbox</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" className="p-link">
                                    <i className="pi pi-power-off"></i>
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </li>

                    {/* <li className="right-sidebar-item">
                        <button type="button" className="p-link" onClick={props.onRightMenuButtonClick}>
                            <i className="pi pi-align-right"></i>
                        </button>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default AppTopbar;
