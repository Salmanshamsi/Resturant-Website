import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { FlexBetween } from "../../style/CommonClasses";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import {
  MdFastfood,
  MdLocalOffer,
  MdFeedback,
  MdOutlineManageAccounts,
} from "react-icons/md";
import { getApiMethod } from "../../state/Api";
import { IoFastFood } from "react-icons/io5";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { HashLoader } from "react-spinners";

const Dashboard = () => {
  const [dashCardData, setDashCardData] = useState({});
  const [loader, setloader] = useState(false);

  const getDashboardData = async () => {
    setloader(true)
    const { data } = await getApiMethod(`/user/dashboardData`);
    setDashCardData(data);
    setloader(false)
  };
  useEffect(() => {
    getDashboardData();
  }, []);
  const [filters1, setFilters1] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });
  const filtersMap = {
    filters1: { value: filters1, callback: setFilters1 },
  };
  const onGlobalFilterChange = (event, filtersKey) => {
    const value = event.target.value;
    let filters = { ...filtersMap[filtersKey].value };
    filters["global"].value = value;

    filtersMap[filtersKey].callback(filters);
  };
  const renderHeader = (filtersKey) => {
    const filters = filtersMap[`${filtersKey}`].value;
    const value = filters["global"] ? filters["global"].value : "";

    return (
      <span className="p-input-icon-left">
        <AiOutlineSearch fontSize={20} />
        <InputText
          type="search"
          value={value || ""}
          onChange={(e) => onGlobalFilterChange(e, filtersKey)}
          placeholder="Search Delivered Order"
        />
      </span>
    );
  };
  const header1 = renderHeader("filters1");
  return (
    <div>
      {
        loader ? <div className="flex justify-center items-center h-screen">
          < HashLoader color="#4338CA" size={40} />
        </div> : <>
          <Heading>DASHBOARD</Heading>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              <div
                className={`${FlexBetween} w-full rounded-xl px-2 py-2 shadow-md`}
              >
                <div>
                  <div className="font-medium text-indigo-600">
                    TOTAL USER
                  </div>
                  <div className="text-indigo-600">{dashCardData?.user}</div>
                </div>
                <AiOutlineUser className="text-indigo-600" fontSize={24} />
              </div>
              <div
                className={`${FlexBetween} w-full rounded-xl px-2 py-2 shadow-md`}
              >
                <div>
                  <div className="font-medium text-indigo-600">
                    TOTAL DISHES
                  </div>
                  <div className="text-indigo-600">{dashCardData?.order}</div>
                </div>
                <MdFastfood className="text-indigo-600" fontSize={24} />
              </div>
              <div
                className={`${FlexBetween} w-full rounded-xl px-2 py-2 shadow-md`}
              >
                <div>
                  <div className="font-medium text-indigo-600">
                    TOTAL OFFERS
                  </div>
                  <div className="text-indigo-600">{dashCardData?.offer}</div>
                </div>
                <MdLocalOffer className="text-indigo-600" fontSize={24} />
              </div>
              <div
                className={`${FlexBetween} w-full rounded-xl px-2 py-2 shadow-md`}
              >
                <div>
                  <div className="font-medium text-indigo-600">
                    ADMINS
                  </div>
                  <div className="text-indigo-600">{dashCardData?.admin}</div>
                </div>
                <MdOutlineManageAccounts className="text-indigo-600" fontSize={24} />
              </div>
              <div
                className={`${FlexBetween} w-full rounded-xl px-2 py-2 shadow-md`}
              >
                <div>
                  <div className="font-medium text-indigo-600">
                    TOTAL FEEDBACK
                  </div>
                  <div className="text-indigo-600">{dashCardData?.feedback}</div>
                </div>
                <MdFeedback className="text-indigo-600" fontSize={24} />
              </div>
              <div
                className={`${FlexBetween} w-full rounded-xl px-2 py-2 shadow-md`}
              >
                <div>
                  <div className="font-medium text-indigo-600">
                    TOTAL ORDER
                  </div>
                  <div className="text-indigo-600">{dashCardData?.order}</div>
                </div>
                <IoFastFood className="text-indigo-600" fontSize={24} />
              </div>
            </div>
            <div className="mt-5">
              <DataTable
                value={dashCardData?.deliver}
                styleClass="myTable"
                responsiveLayout="scroll"
                scrollable
                size="small"
                resizableColumns
                columnResizeMode="expand"
                header={header1}
                filters={filters1}
                onFilter={(e) => setFilters1(e.filters)}
                scrollHeight="430px"
                emptyMessage="No Delivered order found."
                filterDisplay="menu"
                showGridlines
                className="my-2"
                paginator
                rows={6}
              >
                <Column
                  field="Image"
                  header="Image"
                  body={(e) => {
                    return (
                      <>
                        <div className="justify-items-center items-center">
                          <img
                            src={e?.Image?.url}
                            alt="product image"
                            width={50}
                            height={50}
                            style={{
                              display: "flex",
                              borderRadius: "50%",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </div>
                      </>
                    );
                  }}
                  sortable
                ></Column>
                <Column
                  field="userId"
                  header="User Id"
                  style={{ justifyContent: "center" }}
                  sortable
                ></Column>
                <Column
                  field="name"
                  header="Name"
                  style={{ justifyContent: "center" }}
                  sortable
                ></Column>
                <Column
                  field="price"
                  header="Price"
                  style={{ justifyContent: "center" }}
                  sortable
                ></Column>
                <Column
                  field="quantity"
                  header="Quantity"
                  style={{ justifyContent: "center" }}
                  sortable
                ></Column>
              </DataTable>
            </div>
          </section>
        </>
      }

    </div>
  );
};
export default Dashboard;
