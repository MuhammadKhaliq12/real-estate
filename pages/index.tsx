import {
  About,
  After,
  Before,
  CrumApp,
  FeaturedProperty,
  Footer,
  HeroSection,
  Navbar,
  PopularCities,
  OurLocation,
} from "@/components";

import { Location } from "@/lib/types";
// Featured Images
import serviceImg from "@/public/images/service1.png";
import propertyImg2 from "@/public/images/property-img2.jpg";
import propertyImg3 from "@/public/images/property=img-3.jpg";

// Location Images
import locationImg1 from "@/public/images/california.png";
import locationImg2 from "@/public/images/new-york.png";
import locationImg3 from "@/public/images/hudson.png";
import locationImg4 from "@/public/images/jersey.png";
import locationImg5 from "@/public/images/conecticut.png";
import locationImg6 from "@/public/images/image4.png";

// Blogs Images
import blogImg1 from "@/public/images/blog1.png";
import blogImg2 from "@/public/images/blog2.png";
import blogImg3 from "@/public/images/blog3.png";
import blogImg4 from "@/public/images/blog4.png";

export default function Home() {
  const locationsData: Location = [
    {
      name: "California",
      image: locationImg1,
      propertyCount: "500+ Property",
      showOverlay: true,
    },
    {
      name: "New York City",
      image: locationImg2,
      propertyCount: "500+ Property",
      showOverlay: true,
    },
    {
      name: "Hudson Valley",
      image: locationImg3,
      propertyCount: "500+ Property",
      showOverlay: true,
    },
    {
      name: "New Jersey",
      image: locationImg4,
      propertyCount: "500+ Property",
      showOverlay: true,
    },
    {
      name: "Connecticut",
      image: locationImg5,
      propertyCount: "500+ Property",
      showOverlay: true,
    },
    {
      name: "Connecticut",
      image: locationImg6,
      propertyCount: "500+ Property",
      showOverlay: true,
    },
  ];

  const propertyData = [
    {
      imageSrc: serviceImg,
      price: "$520000",
      address: "401 E 60th street 36-A ",
      listingInfo: " Crum Real Estate",
      bedrooms: 3,
      bathrooms: 2,
      size: "8000",
    },
    {
      imageSrc: propertyImg2,
      price: "$520000",
      address: "401 E 60th street 36-A ",
      listingInfo: " Crum Real Estate",
      bedrooms: 3,
      bathrooms: 2,
      size: "8000",
    },
    {
      imageSrc: propertyImg3,
      price: "$520000",
      address: "401 E 60th street 36-A ",
      listingInfo: " Crum Real Estate",
      bedrooms: 3,
      bathrooms: 2,
      size: "8000",
    },
    {
      imageSrc: serviceImg,
      price: "$520000",
      address: "401 E 60th street 36-A ",
      listingInfo: " Crum Real Estate",
      bedrooms: 3,
      bathrooms: 2,
      size: "8000",
    },
  ];

  const blogsData: Location = [
    {
      image: blogImg1,
    },
    {
      name: "Can You Be A Part-Time Real Estate Agent?",

      propertyCount:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae praesentium incidunt exercitationem minus optio quos tempore iusto, accusamus quam eligendi? Rerum reiciendis voluptatum nemo dolore beatae fugiat deserunt cumque ipsa.",
      showOverlay: true,
    },
    {
      name: "Hudson Valley",
      image: blogImg2,
      propertyCount: "500+ Property",
      showOverlay: true,
    },
    {
      image: blogImg3,
    },
    {
      image: blogImg4,
    },
    {
      image: serviceImg,
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection title="Find your place" />
      <About />
      <Before title="Before" />
      <After title="After" />
      <FeaturedProperty
        subHeading="Manhattan, New York"
        properties={propertyData}
        showMainHeading={true}
        mainHeading="Featured Properties"
      />
      <FeaturedProperty
        subHeading="Los Angeles, California"
        properties={propertyData}
        showMainHeading={false}
      />
      <OurLocation heading="Our Locations" locations={locationsData} />
      <CrumApp />
      <OurLocation heading="Our Blogs" locations={blogsData} />
      <PopularCities />
      <Footer />
    </>
  );
}
