import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-hours">
                <div className="title">
                    Hours
                </div>
                <ul className="sidebar-list">
                    <li className="list">
                        <div className="days">Mon</div>
                        <div className="hours">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="list">
                        <div className="days">Tue</div>
                        <div className="hours">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="list">
                        <div className="days">Wed</div>
                        <div className="hours">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="list">
                        <div className="days">Thu</div>
                        <div className="hours">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="list">
                        <div className="days">Fri</div>
                        <div className="hours">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="list">
                        <div className="days">Sat</div>
                        <div className="hours">11:00 am - 10:00 pm</div>
                    </li>
                    <li className="list">
                        <div className="days">Sun</div>
                        <div className="hours">11:00 am - 10:00 pm</div>
                    </li>
                </ul>
            </div>

            <div className="sidebar-business-info">
                <div className="title">
                    More business info
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Has Horse Carriages</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Has Guards</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Has a Maester</div>
                        <div className="sidebar-info-info">No</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Liked by Vegetarians</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Takes Reservations</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Delivery</div>
                        <div className="sidebar-info-info">No</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Take-out</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Accepts Gold Dragons</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Accepts Silver Stags</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Accepts Copper Pennies</div>
                        <div className="sidebar-info-info">No</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Alchohol</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Parking</div>
                        <div className="sidebar-info-info">Yes, Horses </div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Wheelchair Accessible</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Good for Kids</div>
                        <div className="sidebar-info-info">No</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Good for Groups</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Attire</div>
                        <div className="sidebar-info-info">Casual</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Noise Level</div>
                        <div className="sidebar-info-info">Average</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Smoking</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                    <li className="sidebar-info-item">
                        <div className="sidebar-info-desc">Open to All</div>
                        <div className="sidebar-info-info">Yes</div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;