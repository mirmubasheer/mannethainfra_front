


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify'; 
// import 'react-toastify/dist/ReactToastify.css'; 

// import ListingBasicInformation from '../common/ListingBasicInformation';
// import ListingPropertyGallery from '../common/ListingPropertyGallery';
// import ListingPropertyInformation from './ListingPropertyInformation';
// import ListingContactDetails from '../common/ListingContactDetails';

// const UpdateListingForm = () => {
//     const { id } = useParams(); // Get listingId from the URL
//     console.log('Listing ID:', id);

//     const [formData, setFormData] = useState({
//         propertyTitle: '',
//         Description: '',
//         Type: '',
//         Price: '',
//         Area: '',
//         Rooms: '',
//         PropertyId: '',
//         AreaSize: '',
//         SizePrefix: '',
//         LandArea: '',
//         Bedrooms: '',
//         Bathrooms: '',
//         Garages: '',
//         YearBuild: '',
//         amenity: [],
//         Name: '',
//         Email: '',
//         Phone: '',
//         image: null
//     });

//     // Normalize data to handle potential null/undefined values
//     const normalizeData = (data) => ({
//         propertyTitle: data.propertyTitle || '',
//         Description: data.Description || '',
//         Type: data.Type || '',
//         Price: data.Price || '',
//         Area: data.Area || '',
//         Rooms: data.Rooms || '',
//         PropertyId: data.PropertyId || '',
//         AreaSize: data.AreaSize || '',
//         SizePrefix: data.SizePrefix || '',
//         LandArea: data.LandArea || '',
//         Bedrooms: data.Bedrooms || '',
//         Bathrooms: data.Bathrooms || '',
//         Garages: data.Garages || '',
//         YearBuild: data.YearBuild || '',
//         amenity: data.amenity || [],
//         Name: data.Name || '',
//         Email: data.Email || '',
//         Phone: data.Phone || '',
//         image: data.image || null
//     });

//     // Fetch existing data when component loads
//     useEffect(() => {
//         if (!id) return; // If id is invalid or undefined, do nothing

//         const fetchListingData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/projects/${id}`);
//                 setFormData(normalizeData(response.data)); // Prefill the form with fetched data
//             } catch (error) {
//                 toast.error('Failed to load data.');
//                 console.error('Error fetching listing data:', error);
//             }
//         };

//         fetchListingData();
//     }, [id]);

//     const handleChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [id]: value
//         }));
//     };

//     const handleAmenityChange = (amenity) => {
//         setFormData(prevData => {
//             const updatedAmenities = prevData.amenity.includes(amenity)
//                 ? prevData.amenity.filter(item => item !== amenity)
//                 : [...prevData.amenity, amenity];
//             return { ...prevData, amenity: updatedAmenities };
//         });
//     };

//     const handleFileChange = (file) => {
//         setFormData(prevData => ({
//             ...prevData,
//             image: file || null // Handle the file input correctly
//         }));
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formDataObj = new FormData();
        
//         // Add form fields to FormData
//         Object.keys(formData).forEach(key => {
//           if (Array.isArray(formData[key])) {
//             formData[key].forEach((item) => {
//               formDataObj.append(`${key}[]`, item);
//             });
//           } else {
//             formDataObj.append(key, formData[key]);
//           }
//         });
      
//         // Add image if it exists
//         if (formData.image) {
//           formDataObj.append('image', formData.image); // Ensure 'image' is correct
//         }
      
//         console.log('Form Data:', formDataObj);
      
//         try {
//           const response = await axios.patch(`http://localhost:5000/projects/${id}`, formDataObj, {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//           });
//           console.log('Success:', response.data);
//         } catch (error) {
//           console.error('Error:', error.response?.data || error.message);
//         }
//       };
      
      


// //     toast.success('Listing updated successfully!');
// //     console.log('Success:', response.data);
// // } catch (error) {
// //     toast.error('Error updating listing.');
// //     console.error('Error:', error);
// // }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <ListingBasicInformation formData={formData} handleChange={handleChange} />
//                 <ListingPropertyGallery onImageChange={handleFileChange} />
//                 <ListingPropertyInformation formData={formData} handleChange={handleChange} handleAmenityChange={handleAmenityChange} />
//                 <ListingContactDetails formData={formData} handleChange={handleChange} />
//                 <button type="submit" className="btn btn-main w-100">Update Property</button>
//             </form>

//             <ToastContainer />
//         </>
//     );
// };

// export default UpdateListingForm;












import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import ListingBasicInformation from '../common/ListingBasicInformation';
import ListingPropertyGallery from '../common/ListingPropertyGallery';
import ListingPropertyInformation from './ListingPropertyInformation';
import ListingContactDetails from '../common/ListingContactDetails';

const UpdateListingForm = () => {
    const { id } = useParams(); // Get listingId from the URL
    // console.log('Listing ID:', id);

    const [formData, setFormData] = useState({
        propertyTitle: '',
        Description: '',
        Type: '',
        Price: '',
        Area: '',
        Rooms: '',
        PropertyId: '',
        AreaSize: '',
        SizePrefix: '',
        LandArea: '',
        Bedrooms: '',
        Bathrooms: '',
        Garages: '',
        YearBuild: '',
        amenity: [], // amenity is an array
        Name: '',
        Email: '',
        Phone: '',
        image: null // Image starts as null
    });

    // Normalize data to handle potential null/undefined values
    const normalizeData = (data) => ({
        propertyTitle: data.propertyTitle || '',
        Description: data.Description || '',
        Type: data.Type || '',
        Price: data.Price || '',
        Area: data.Area || '',
        Rooms: data.Rooms || '',
        PropertyId: data.PropertyId || '',
        AreaSize: data.AreaSize || '',
        SizePrefix: data.SizePrefix || '',
        LandArea: data.LandArea || '',
        Bedrooms: data.Bedrooms || '',
        Bathrooms: data.Bathrooms || '',
        Garages: data.Garages || '',
        YearBuild: data.YearBuild || '',
        amenity: data.amenity || [], // Ensure amenity is an array
        Name: data.Name || '',
        Email: data.Email || '',
        Phone: data.Phone || '',
        image: data.image || null
    });

    // Fetch existing data when component loads
    useEffect(() => {
        if (!id) return; // If id is invalid or undefined, do nothing

        const fetchListingData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/projects/${id}`);
                setFormData(normalizeData(response.data)); // Prefill the form with fetched data
            } catch (error) {
                toast.error('Failed to load data.');
                console.error('Error fetching listing data:', error);
            }
        };

        fetchListingData();
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleAmenityChange = (amenity) => {
        setFormData(prevData => {
            const updatedAmenities = prevData.amenity.includes(amenity)
                ? prevData.amenity.filter(item => item !== amenity)
                : [...prevData.amenity, amenity];
            return { ...prevData, amenity: updatedAmenities };
        });
    };

    // Handle file input for image upload
    const handleFileChange = (file) => {
        setFormData(prevData => ({
            ...prevData,
            image: file // Directly set the file object
        }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Create FormData object
      const formDataObj = new FormData();
      
      // Append non-array form fields to FormData
      Object.keys(formData).forEach(key => {
          if (key !== 'amenity' && key !== 'image') {
              formDataObj.append(key, formData[key]);
          }
      });
      
      // Append amenities array to FormData (if any)
      if (formData.amenity.length > 0) {
          formData.amenity.forEach((amenity) => {
              formDataObj.append('amenity[]', amenity);
          });
      }
      
      // Append image to FormData (if exists)
      if (formData.image) {
          formDataObj.append('image', formData.image); // Ensure file input is appended correctly
      }
      
      try {
          const response = await axios.patch(`http://localhost:5000/projects/${id}`, formDataObj, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          
          // Show success message
          toast.success('Listing updated successfully!');
          console.log('Success:', response.data);
      } catch (error) {
          // Show error message
          toast.error('Error updating listing.');
          console.error('Error:', error.response?.data || error.message);
      }
  };
  

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ListingBasicInformation formData={formData} handleChange={handleChange} />
                <ListingPropertyGallery onImageChange={handleFileChange} />
                <ListingPropertyInformation formData={formData} handleChange={handleChange} handleAmenityChange={handleAmenityChange} />
                <ListingContactDetails formData={formData} handleChange={handleChange} />
                <button type="submit" className="btn btn-main w-100">Update Property</button>
            </form>

            <ToastContainer />
        </>
    );
};

export default UpdateListingForm;

