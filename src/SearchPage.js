import React from "react";
import "./SearchPage.css";
import { MdOutlineTune } from "react-icons/md";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <MdOutlineTune className="searchPage__icon" />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AIf8zZRnVqrXfBmWfH4P4Kq1VHQuoHK48TwpoOEnNTvj7w=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Zakir Khan"
        verified
        subs="7.69M"
        noOfVideos={187}
        description="Zakir Khan is the Sakht Launda jiske liye badal Bahut zyada important."
      />
      <hr />




      <VideoRow
        views="2M"
        subs="7.69M"
        description="Dive into hilarity with Zakir Khan's snippet from the Mannpasand Special! Experience laughter like ..."
        channel="Zakir Khan"
        title="Zakir Khan | Neend Vs Ladai | MannPasand | Uncut"
        image="https://i.ytimg.com/vi/ZRZ-qxtt3Ps/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtpCRXupwOu0XuxpJmpV92CB2JDQ"
      />

      <VideoRow
        views="80M"
        subs="7.69M"
        description="Performance at AIB Diwas!"
        channel="Zakir Khan"
        title="When I met a Delhi Girl | Zakir Khan | Stand Up Comedy | AIB Diwas"
        image="https://i.ytimg.com/vi/sIl8vsWrD8o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8fmapnPE3PdeabR7FnB9AR8r8_Q"
      />

      <VideoRow
        views="22M"
        subs="7.69M"
        description="In his latest standup video, Zakir Khan talks about the little things his mom does, his thoughts on ..."
        timestamp="3 years ago"
        channel="Zakir Khan"
        title="Bahut Pighle Hain | Zakir khan | Stand-Up Comedy | Sukha poori 6"
        image="https://i.ytimg.com/vi/MLdXYEWTC1k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZJkElD2OWB_Gzu0mKppIhms-ZnA"
      />

      <VideoRow
        views="20M"
        subs="7.69M"
        description="Don't miss out on the fun – watch now! 🔗."
        timestamp="2 years ago"
        channel="Zakir Khan"
        title="Zakir Khan | Guitar Wale Ladke | MannPasand"
        image="https://i.ytimg.com/vi/QjAK_mMZPdM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAWPldCWaZA35cyi7HlgsvM-z_E1w"
      />

      <VideoRow
        views="34M"
        subs="7.69M"
        description="To catch Zakir Khan in your city, don't miss out on the fun."
        timestamp="1 year ago"
        channel="Zakir Khan"
        title="Babu Khana Kha lo | Zakir Khan | Stand-Up Comedy | Sukha poori 5"
        image="https://i.ytimg.com/vi/B9nTWeqund8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLApDQ2kWrfph-O-dl-N8wJeZwy6ng"
      />

      <VideoRow
        views="2M"
        subs="7.69M"
        description="Dive into hilarity with Zakir Khan's snippet from the Mannpasand Special! Experience ..."
        channel="Zakir Khan"
        title="Zakir Khan | Neend Vs Ladai | MannPasand | Uncut"
        image="https://i.ytimg.com/vi/ZRZ-qxtt3Ps/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtpCRXupwOu0XuxpJmpV92CB2JDQ"
      />

      <VideoRow
        views="20M"
        subs="7.69M"
        description="To catch Zakir Khan in your city subscribe."
        channel="Zakir Khan"
        title="Tum Husn Pari | Zakir Khan | Stand Up-Comedy | Sukha Poori 2"
        image="https://i.ytimg.com/vi/OCkbJNcddD8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC2ra8qCfoN1Bk-pvWCABOuJuI9sA"
      />

      <VideoRow
        views="30M"
        subs="7.69M"
        description="Dive into hilarity with Zakir Khan's snippet from the Mannpasand Special! ..."
        channel="Zakir Khan"
        title="Bag jama sakte hain?? - Zakir Khan - Kaksha Gyarvi"
        image="https://i.ytimg.com/vi/vLoy96ONjcw/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGCEgISh_MA8=&rs=AOn4CLCCCUwyXCbBGNxSnvu6gjvcKIG2eA"
      />

    </div>
  );
}

export default SearchPage;
