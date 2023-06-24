import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "@fullcalendar/react";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg, EventInput } from "@fullcalendar/core";

// components
import PageTitle from "../../../components/PageTitle";

import Calendar from "./Index";
import AddEditEvent from "./CalenderHrEdit";

// dummy data
import { defaultEvents } from "./CalendarDummydata";

// images
import calendarImg from "../../../assets/images/cal.png";
import Admin from "../../Admin/Admin";
import { Link } from "react-router-dom";
import HREmployee from "../HREmployee";

interface IntroCardProps {
    createNewEvent: () => void;
}
interface LayoutType {
    id: number;
    name: string;
}
const IntroCard = ({ createNewEvent }: IntroCardProps) => {
    return (
        <>

            <div className="mt-2">
                <Row className="align-items-center">
                    {/* <Col xl={2} lg={3} xs={6}>
            <img
              src={calendarImg}
              className="me-4 align-self-center img-fluid"
              alt=""
            />
          </Col> */}
                    <h4 className="mt-0 mb-1 fw-bold text-dark">Options</h4>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/addholiday">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-solid fa-sun"></i> Holiday
                                </Button>
                            </Link>
                            {/* <Button variant="white" className="mt-2">
                <i className="uil-sync"></i> Link Calendars
              </Button> */}
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/leaverequest">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-solid fa-message"></i> Leave Request
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/travelrequest">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-solid fa-plane"></i> Travel Request
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/addtrainings">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-sharp fa-solid fa-trophy"></i>  Trainings
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/addprojects">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-sharp fa-solid fa-building"></i> Projects
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/addtasks">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-solid fa-list-check"></i> Tasks
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/addevents">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-solid fa-calendar-days"></i>  Events
                                </Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-4 mt-lg-0">
                            <Link to="/apps/hremploye/calander/addmeetings">
                                <Button
                                    variant="outline-secondary"
                                    className="mt-2 me-1 fw-bold"
                                    id="btn-new-event"
                                >
                                    <i className="fa-solid fa-clock"></i>  Meetings
                                </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </>

    );
};

// const LeaveReuest = ({ createNewEvent }: IntroCardProps) => {
//     return (
//         <>

//             <div className="mt-2">
//                 <Row className="align-items-center">
//                     {/* <Col xl={2} lg={3} xs={6}>
//             <img
//               src={calendarImg}
//               className="me-4 align-self-center img-fluid"
//               alt=""
//             />
//           </Col> */}
//                     <Col xl={10} lg={9}>
//                         <div className="mt-4 mt-lg-0">
//                             <Button
//                                 variant="primary"
//                                 className="mt-2 me-1 fw-bold"
//                                 id="btn-new-event"
//                                 onClick={createNewEvent}
//                             >
//                                 <i className="fa-solid fa-sun"></i> Leave Request
//                             </Button>
//                         </div>
//                     </Col>
//                 </Row>
//             </div>
//         </>

//     );
// };

const CalendarHrEmp = () => {
    /*
     * modal handeling
     */
    const [show, setShow] = useState<boolean>(false);
    const onCloseModal = () => {
        setShow(false);
        setEventData({});
        setDateInfo({});
    };
    const onOpenModal = () => setShow(true);
    const [isEditable, setIsEditable] = useState<boolean>(false);

    /*
     * event data
     */
    const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
    const [eventData, setEventData] = useState<EventInput>({});
    const [dateInfo, setDateInfo] = useState<any>({});

    /*
      calendar events
      */
    // on date click
    const onDateClick = (arg: DateClickArg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };

    // on event click
    const onEventClick = (arg: EventClickArg) => {
        const event = {
            id: String(arg.event.id),
            title: arg.event.title,
            className: arg.event.classNames[0],
        };
        setEventData(event);
        onOpenModal();
        setIsEditable(true);
    };

    /*
      on add event 
      */
    const onAddEvent = (data: any) => {
        const modifiedEvents = [...events];
        const event = {
            id: String(modifiedEvents.length + 1),
            title: data.title,
            start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
            className: data.className,
        };
        modifiedEvents.push(event);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    /*
      on update event
      */
    const onUpdateEvent = (data: any) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e["id"] === eventData!.id);
        modifiedEvents[idx]["title"] = data.title;
        modifiedEvents[idx]["className"] = data.className;
        setEvents(modifiedEvents);
        onCloseModal();
        setIsEditable(false);
    };

    /*
      on remove event
      */
    const onRemoveEvent = () => {
        var modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e: any) => e["id"] === eventData!.id);
        modifiedEvents.splice(idx, 1);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // create new event
    const createNewEvent = () => {
        setIsEditable(false);
        onOpenModal();
    };

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className=" mb-4 p-3">
                <PageTitle
                    breadCrumbItems={[
                        { label: "Apps", path: "/apps/calendar" },
                        // { label: "Calendar", path: "/apps/calendar", active: true },
                    ]}
                    title={"Calendar"}
                />

                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <IntroCard createNewEvent={createNewEvent} />
                                {/* <LeaveReuest createNewEvent={createNewEvent} /> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                {/* fullcalendar control */}
                                <Calendar
                                    onDateClick={onDateClick}
                                    onEventClick={onEventClick}
                                    events={events}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* add new event modal */}
                {show ? (
                    <AddEditEvent
                        isOpen={show}
                        onClose={onCloseModal}
                        isEditable={isEditable}
                        eventData={eventData}
                        onUpdateEvent={onUpdateEvent}
                        onRemoveEvent={onRemoveEvent}
                        onAddEvent={onAddEvent}
                    />
                ) : null}
            </div>

        </>
    );
};

export default CalendarHrEmp;
