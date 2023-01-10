import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { addMembers } from "../Redux/Actions/memberActions";
// import { addMembers } from "../../../Redux/Actions/memberActions";
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../Redux/Actions/eventsAction';
// import { MdCloudUpload, MdDelete } from "react-icons/md";






const EventsForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);

    const formDataObj = Object.fromEntries(formData.entries());

    dispatch(addEvent(formDataObj))
  };
  return (
    <>
      <div className="sm:mt-0 md:mt-5">
        <div className="grid grid-cols-1 md:gap-2">

          <div className="px-5">
            <div className="px-4 sm:px-0">
              <h1 className="text-3xl font-medium leading-6 text-gray-900">Add New Member</h1>
            </div>
          </div>

          <div className="mt-5 md:mt-0">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-2 bg-white sm:p-6">


                  <div className="grid grid-cols-6 grid-rows-[60] sm:grid-rows-[30] gap-3 md:gap-6 ">

                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label
                        htmlFor="eventName"
                        className="block text-sm font-medium text-gray-700">
                        Event name                      </label>
                      <input
                        required
                        type="text"
                        name="eventName"
                        id="eventName"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label htmlFor="Eventtype" className="block text-sm font-medium text-gray-700">
                      Event type
                      </label>
                      <select
                        required="required"
                        id="Eventtype"
                        name="Eventtype"
                        className="block w-full py-2 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">- - Choose an option - -</option>
                        <option value="working">sports</option>
                        <option value="retired">music</option>
                        <option value="retired">general</option>
                        <option value="retired">children</option>
                        <option value="retired">school</option>




                      </select>
                    </div>
                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label
                        htmlFor="dateOfBirth"
                        className="block text-sm font-medium text-gray-700">
                        Event Start date
                      </label>
                      <input
                        required
                        type="date"
                        name="EventStartdate"
                        id="EventStartdate"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>


                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label
                        htmlFor="EventEndate"
                        className="block text-sm font-medium text-gray-700">
                        Event Start date
                      </label>
                      <input
                        required
                        type="date"
                        name="EventEndate"
                        id="EventEndate"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label
                        htmlFor="emailId"
                        className="block text-sm font-medium text-gray-700">
                        Event description
                      </label>
                      <input
                        required
                        type="text"
                        name="EventDescription"
                        id="EventDdescription"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label
                        htmlFor="permanentAddressLine1"
                        className="block text-sm font-medium text-gray-700">
                        Event handle by
                      </label>
                      <input
                        required
                        type="text"
                        name="EvenHhandleBy"
                        id="EventHandleBy"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label
                        htmlFor="permanentAddressLine2"
                        className="block text-sm font-medium text-gray-700">
                        Event Organisation
                      </label>
                      <input
                        required
                        type="text"
                        name="EventOrganisation"
                        id="EventOrganisation"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>


                    <div className="col-span-12 col-start-1 sm:col-span-3">
                      <label
                        htmlFor="presentAddressLine1"
                        className="block text-sm font-medium text-gray-700">
                        Total number of sub events
                      </label>
                      <input
                        required
                        type="text"
                        name="TotalNumberofSubEvents"
                        id="TotalNumberofSubEvents"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                  </div>


                </div>
                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default EventsForm


