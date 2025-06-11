// import { useEffect, useState } from "react";
// import { getServices } from "@/lib/api"; // Import API function
// import Card from "@/components/ui/Card";
// import CustomSelect from "@/components/select/CustomSelect";
// import { ToastComponent } from "@/components/toast/ToastComponent";
// import { useServices } from "@/hooks/useServices";

// export default function ServicesPage() {
//   const [services, setServices] = useState([]);
//   const [filteredServices, setFilteredServices] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const { fetchServices } = useServices(); // Custom hook for fetching services

//   useEffect(() => {
//     // Fetch services on component mount
//     const fetchData = async () => {
//       try {
//         const data = await getServices(); // Call the API
//         setServices(data);
//         setFilteredServices(data);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Filter services based on selected category
//   const handleFilterChange = (value: string) => {
//     setFilter(value);
//     if (value === "all") {
//       setFilteredServices(services);
//     } else {
//       setFilteredServices(
//         services.filter((service: any) => service.category === value)
//       );
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-primary mb-6">
//         Explore Services
//       </h1>

//       {/* Filter dropdown */}
//       <CustomSelect
//         value={filter}
//         onChange={handleFilterChange}
//         options={[
//           { value: "all", label: "All" },
//           { value: "cleaning", label: "Cleaning" },
//           { value: "delivery", label: "Delivery" },
//           { value: "plumbing", label: "Plumbing" },
//         ]}
//         className="mb-6 w-full max-w-md"
//       />

//       {/* Service cards grid */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {filteredServices.map((service: any) => (
//           <Card
//             key={service.id}
//             title={service.title}
//             description={service.description}
//             price={service.price}
//             category={service.category}
//             onClick={() => {
//               // Navigate to service detail page
//               // You can add router.push here later
//               console.log("Book service:", service.id);
//               ToastComponent.success("Service booked successfully!");
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }