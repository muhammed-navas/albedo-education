import React from "react";
import AllDataPreview from "../../components/home/AllDataPreview";
import DataDisplayMainBox from "../../components/home/box/DataDisplayBox";
import ExpenseRatio from "../../components/home/ExpenseInHomePage";
import SlideAd from "../../components/home/SlideAd";
import Summery from "../../components/home/Summery";

const boxDatA = [
  {
    "boxTopHeadSection": {
      "mainTitle": "Students",
      "subTitle": "Request",
      "headers": ["Session", "Verification", "Refund"]
    },
    "content": [
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-purple-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-blue-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-red-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-red-500"
      }
    ],
    "button": {
      "label": "View More",
      "actionUrl": "/more-requests"
    }
  },
  {
    "boxTopHeadSection": {
      "mainTitle": "Teacher",
      "subTitle": "Feedbacks",
      "headers": ["Teacher", "Mentor"]
    },
    "content": [
      {
        "title": "",
        "img":'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBwcm9maWxlfGVufDB8fDB8fHww',
        "name": "Mr. Thomson",
        "raiting" : 0.5,
        "date": "(4.2) Good ",
        "colorClass": "bg-purple-500"
      },
      {
        "title": "",
        "img":'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBwcm9maWxlfGVufDB8fDB8fHww',
        "name": "Mr. Thomson",
        "raiting" : 1,
        "date": "(4.2) Good ",
        "colorClass": "bg-blue-500"
      },
      {
        "title": "",
        "img":'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBwcm9maWxlfGVufDB8fDB8fHww',
        "name": "Mr. Thomson",
        "raiting" : 1.5,
        "date": "(4.2) Good ",
        "colorClass": "bg-red-500"
      },
      {
        "title": "",
        "img":'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBwcm9maWxlfGVufDB8fDB8fHww',
        "name": "Mr. Thomson",
        "raiting" : 1.5,
        "date": "(4.2) Good ",
        "colorClass": "bg-red-500"
      }
    ],
    "button": {
      "label": "View More",
      "actionUrl": "/more-requests"
    }
  }
];
const boxDatAOne = [
  {
    "boxTopHeadSection": {
      "mainTitle": "",
      "subTitle": "Refund",
      "headers": ""
    },
    "content": [
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-purple-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-blue-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-red-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-red-500"
      }
    ],
    "button": {
      "label": "View More",
      "actionUrl": "/more-requests"
    }
  },
  {
    "boxTopHeadSection": {
      "mainTitle": "",
      "subTitle": "Feedback",
      "headers": ""
    },
    "content": [
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-purple-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-blue-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-red-500"
      },
      {
        "title": "Requested delete a student",
        "name": "Mr. Thomson",
        "date": "2024-11-01",
        "colorClass": "bg-red-500"
      }
    ],
    "button": {
      "label": "",
      "actionUrl": ""
    }
  }
];
const data = [
  { value: 300 },
  { value: 150 },
  { value: 700 },
  { value: 350 },
  { value: 500 },
]
const dataOne = [
  { value: 300 },
  { value: 250 },
  { value: 400 },
  { value: 250 },
  { value: 500 },
]

export const HomePage = () => {
  return (
    <div className="max-w-6xl m-auto pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-200 col-span-2 rounded-3xl p-2">
            <ExpenseRatio />
          </div>
          <div className="bg-gray-200 rounded-3xl ">
            <AllDataPreview title='Students' Totaodata='500' data={data} path='#' gcolor='#132092' />
          </div>
          <div className="bg-gray-200  rounded-3xl ">
            <AllDataPreview title='Teacher' Totaodata='200' data={dataOne} path='#' gcolor='#5967e1' />
          </div>
        </div>
        <div className="rounded-3xl ">
          <SlideAd />
          <Summery />
        </div>
        {boxDatA.map((boxData, index) => (
          <DataDisplayMainBox key={index} data={{ ...boxData, content: boxData.content.slice(0, 3) }} grid='1' />
        ))}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {boxDatAOne.map((boxData, index) => (
          <DataDisplayMainBox key={index} data={{ ...boxData, content: boxData.content.slice(0, 3) }} grid='2' />
        ))}
        </div>
        <div className="bg-gray-200  rounded-3xl ">
            <AllDataPreview title='Teacher' Totaodata='200' data={data} path='#' gcolor='#5967e1' />
          </div>
      </div>
    </div>
  );
};
