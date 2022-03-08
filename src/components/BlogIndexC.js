import React, { useState } from "react";
import AnimationRevealPage from './helpers/AnimationRevealPage'
import { Container, ContentWithPaddingXl } from './misc/Layouts'
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from './headers/light'
import { SectionHeading } from './misc/Headings'
import { PrimaryButton } from './misc/Buttons'

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const BlogIndexC = (props, {
  headingText = "Student Discounts",
  posts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565968464329-b7a8827462c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80",
      category: "Apple Music",
      date: "Valid till Dec 2022",
      title: "Sign up to the Apple Music Student Plan, only RM4.98 per month",
      description:
        "Plan now includes Apple TV+ for free.",
      url: "https://apple.com/",
      featured: true
    },
    getPlaceholderPost1(),
    getPlaceholderPost2(),
    getPlaceholderPost3(),
    getPlaceholderPost4(),
    getPlaceholderPost5(),
    getPlaceholderPost6(),
    getPlaceholderPost7(),
    getPlaceholderPost8(),
    getPlaceholderPost9()
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };

  const email = props.profile.getEmail();
  const imageUrl = props.profile.getImageUrl();
  const name = props.profile.getName();

  return (
    <AnimationRevealPage>
      <Header email={email} imageUrl={imageUrl} name={name} />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};

export default BlogIndexC;

const getPlaceholderPost1 = () => ({
  imageSrc:
    "https://images.unsplash.com/flagged/photo-1573162915884-74c45ba4cfe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  category: "Microsoft",
  date: "Valid till Dec 2022",
  title: "Microsoft Store Student Discount",
  description:
    "Have fun with your student discount online with Microsoft.",
  url: "https://microsoft.com"
});

const getPlaceholderPost2 = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  category: "Cotton On",
  date: "Valid till Jun 2022",
  title: "20% CottonOn Student Discount",
  description:
    "Have fun with your student discount online with Cotton On.",
  url: "https://cottonon.com/"
});

const getPlaceholderPost3 = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  category: "getAbstract",
  date: "Valid till 2025",
  title: "Access over 22,000 books with 40% off",
  description:
    "Access over 22,000 books with 40% off.",
  url: "https://www.getabstract.com"
});

const getPlaceholderPost4 = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80",
  category: "Typo",
  date: "Valid till Dec 2022",
  title: "15% student discount on Typo stationary",
  description:
    "Access over 22,000 books with 40% off.",
  url: "https://www.typo.com"
});

const getPlaceholderPost5 = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1635770997779-8ec3396088a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  category: "Under Armour",
  date: "Limited time only!",
  title: "Up to 40% off Under Armour sport shoes",
  description:
    "Up to 40% off sports shoes.",
  url: "https://www.underarmour.com"
});

const getPlaceholderPost6 = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  category: "Twin Tower Fitness Centre",
  date: "Valid till 2025",
  title: "15% off membership for student",
  description:
    "15% off membership for student.",
  url: "https://twintowersfitnesscentre.com/"
});

const getPlaceholderPost7 = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1585759065152-3b0e2524b869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  category: "McDonalds",
  date: "Limited time only!",
  title: "Free McValue Meals for student",
  description:
    "Free McValue Meals for student.",
  url: "https://www.mcdonalds.com.my/"
});

const getPlaceholderPost8 = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1608539733377-5557e02926b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  category: "Focus Point",
  date: "Valid till Sep 2022",
  title: "30% Focus Point Student Discount",
  description:
    "30% Focus Point Student Discount.",
  url: "https://www.focus-point.com/"
});

const getPlaceholderPost9 = () => ({
  imageSrc:
    "https://www.mohe.gov.my/images/hebahan/sorotan_aktiviti/2022/02/2022-02-23-pelancaran-pprn/2022-02-23-pelancaran-pprn-10-min.JPG",
  category: "Gloria Jean's Coffees",
  date: "Limited time only!",
  title: "GJC Coffee Voucher for Student by MOHE",
  description:
    "GJC Coffee Vouchers for Student by MOHE.",
  url: "https://www.gloriajeanscoffees.my/"
});