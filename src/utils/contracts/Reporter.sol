// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Reporter{
    address payable public owner;
    uint public count=1;
    struct Report{
        uint256 uid;
        string title;
        string  image_url;
        string  report_msg;
        uint timestamp;
        address owner;
        string userName;
        string location;
        string governmentBody;
    }
    struct Comment{
        string comment_msg;
        address owner_comment;
    }
    
    constructor() {
        owner = payable(msg.sender);
    }

    mapping (uint => Comment[]) comments;
    mapping (uint => uint) likes;
    mapping (address => uint[]) isLiked;
    mapping (address => Report[]) userToReports;
    Report[] publicReports;
    mapping (uint => Report) public tweets;
    mapping(address => string) public usernames;
    event addReportEvent(string _title, string  _image_url,string  _report_msg,string  _username, string _location, string _governmentBody);

    function addReport(string memory _title, string memory _image_url,string memory _report_msg,string memory _username, string memory _location, string memory _governmentBody) public  {        
        Report memory t = Report(count,_title, _image_url,_report_msg,block.timestamp,msg.sender,_username, _location, _governmentBody);
        tweets[count] = t;
        publicReports.push(t);
        userToReports[msg.sender].push(t);
        emit addReportEvent(_title, _image_url, _report_msg, _username, _location, _governmentBody);
        count+=1;
    }

    function getReports() public view returns(Report[] memory){
        return publicReports;
    }

    function addComment(uint _uid,string memory _comment_msg) public {
        Comment memory c = Comment(_comment_msg,msg.sender);
        comments[_uid].push(c);
    }

    function getComment(uint _uid) public view returns(Comment[] memory){
        return comments[_uid];
    }

    function likeTheReport(uint _uid) public {
        isLiked[msg.sender].push(_uid);
        likes[_uid] +=1;
    }

    function getLikesOfReport(uint _uid) public view returns(uint){
        return likes[_uid];
    }

    function getUserLikes() public view returns(uint[] memory){
        return isLiked[msg.sender];
    }

    function getUserTweets () public view returns(Report[] memory){
        return userToReports[msg.sender];
    }

    function setUsername(string memory _username) public {
        usernames[msg.sender] = _username;
    }

    function getUsername(address _userAddress) public view returns (string memory) {
        return usernames[_userAddress];
    }
}