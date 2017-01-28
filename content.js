var url = window.location.href;

if(url == "https://twitter.com/nebulqh")
{
    var twitterHandle = "nebulqh";
    var twitterName = "n";
    var twitterFollowers = kFormatter(getRandomInt(28000,400000));
    var twitterFollowing = "2";
    var twitterMedia = "256";
    doTwitter();
} else if(url == "https://twitter.com/HQRRlSON")
{
    var twitterHandle = "hqrrison";
    var twitterName = "harrison";
    var twitterFollowers = kFormatter(getRandomInt(28000,400000));
    var twitterFollowing = "2";
    var twitterMedia = "256";
    doTwitter();
} else if(url == "https://twitter.com/luxuriousnws" || url == "https://twitter.com/LuxuriousNWS")
{
    var twitterHandle = "luxuriousnws";
    var twitterName = "Luxurious News";
    var twitterFollowers = mFormatter(getRandomInt(40000,50000000));
    var twitterFollowing = "2";
    var twitterMedia = "256";
    doTwitter(); 
} else if(url == "https://twitter.com/xkyIiejenner")
{
    var twitterHandle = "xkyIiejenner";
    var twitterName = "Kylie Jenner";
    var twitterFollowers = kFormatter(getRandomInt(40000,50000000));
    var twitterFollowing = "2";
    var twitterMedia = "256";
    doTwitter(); 
}




//-----------------------------------------------------------------------------------------------


//twitter
function doTwitter() {
    
    var twitterHandle;
    var twitterNameClass = document.getElementsByClassName("ProfileHeaderCard-name");
    var twitterStatsClass = document.getElementsByClassName("ProfileNav-list");
    var twitterLikesRetweetsClass = document.getElementsByClassName("ProfileTweet-actionCountForPresentation");

    var twitterVerified = ' <a href="/'+ twitterHandle +'" class="ProfileHeaderCard-nameLink u-textInheritColor js-nav">'+ twitterName +'</a><span class="ProfileHeaderCard-badges"><a href="/help/verified" class="js-tooltip" target="_blank" data-placement="right" rel="noopener" data-original-title="Verified account"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></a></span>';
    
    var twitterStatsPlugin = '<li class="ProfileNav-item ProfileNav-item--tweets is-active">           <a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-nav" title="231 Tweets" data-nav="tweets" tabindex="0">             <span class="ProfileNav-label">Tweets</span>             <span class="ProfileNav-value" data-is-compact="false">'+ twitterMedia +'</span>           </a>         </li><li class="ProfileNav-item ProfileNav-item--following">         <a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor" title="113 Following" data-nav="following" href="/'+ twitterHandle +'/following">           <span class="ProfileNav-label">Following</span>           <span class="ProfileNav-value" data-is-compact="false">'+ twitterFollowing +'</span>         </a>       </li><li class="ProfileNav-item ProfileNav-item--followers">         <a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor" data-nav="followers" href="/'+ twitterHandle +'/followers" data-original-title="136 Followers">           <span class="ProfileNav-label">Followers</span>           <span class="ProfileNav-value" data-is-compact="false">'+ twitterFollowers +'</span>         </a>       </li><li class="ProfileNav-item ProfileNav-item--favorites" data-more-item=".ProfileNav-dropdownItem--favorites">         <a class="ProfileNav-stat ProfileNav-stat--link u-borderUserColor u-textCenter js-tooltip js-openSignupDialog js-nonNavigable u-textUserColor" data-nav="favorites" href="/'+ twitterHandle +'/likes" data-original-title="374 Likes">           <span class="ProfileNav-label">Likes</span>           <span class="ProfileNav-value" data-is-compact="false">374</span>         </a>       </li><li class="ProfileNav-item ProfileNav-item--more dropdown is-hidden">        <a class="ProfileNav-stat ProfileNav-stat--link ProfileNav-stat--moreLink js-openSignupDialog js-nonNavigable" role="button" href="#more">           <span class="ProfileNav-label">&nbsp;</span>           <span class="ProfileNav-value">More <span class="ProfileNav-dropdownCaret Icon Icon--caretDown"></span></span>         </a>         <div class="dropdown-menu">           <div class="dropdown-caret">             <span class="caret-outer"></span>             <span class="caret-inner"></span>           </div>           <ul><li>               <a href="/'+ twitterHandle +'/likes" class="ProfileNav-dropdownItem ProfileNav-dropdownItem--favorites is-hidden u-bgUserColorHover u-bgUserColorFocus u-linkClean js-nav">Likes</a></li></ul>         </div>       </li><li class="ProfileNav-item ProfileNav-item--userActions u-floatRight u-textRight with-rightCaret ">         <div class="UserActions   u-textLeft">     <div class="user-actions btn-group not-following " data-user-id="775338253813592064" data-screen-name="'+ twitterHandle +'" data-name="n" data-protected="false">       <span class="UserActions-moreActions u-inlineBlock">           <button type="button" class="js-tooltip unmute-button btn small plain-btn" title="Unmute @'+ twitterHandle +'" data-placement="top">             <span class="Icon Icon--muted Icon--medium"><span class="visuallyhidden">Unmute @'+ twitterHandle +'</span></span>           </button><button type="button" class="first-load js-tooltip mute-button btn small plain-btn" title="Mute @'+ twitterHandle +'" data-placement="top">             <span class="Icon Icon--unmuted Icon--medium"><span class="visuallyhidden">Mute @'+ twitterHandle +'</span></span>           </button>        </span><button class="user-actions-follow-button js-follow-btn follow-button btn" type="button">   <span class="button-text follow-text">      <span class="Icon Icon--follow"></span> Follow       </span>   <span class="button-text following-text">      Following       </span>   <span class="button-text unfollow-text">      Unfollow       </span>   <span class="button-text blocked-text">Blocked</span>   <span class="button-text unblock-text">Unblock</span>   <span class="button-text pending-text">Pending</span>   <span class="button-text cancel-text">Cancel</span> </button>      </div> </div>        </li>     </ul>';


    for(var i = 0; i < twitterNameClass.length; i++){
        twitterNameClass[i].innerHTML=twitterVerified;    // Change the content
    }

    for(var i = 0; i < twitterStatsClass.length; i++){
        twitterStatsClass[i].innerHTML=twitterStatsPlugin;    // Change the content
    }

    for(var i = 0; i < twitterLikesRetweetsClass.length; i++){
        twitterLikesRetweetsClass[i].innerHTML=kFormatter(getRandomInt(280,40000));    // Change the content
    }

}

//misc

//random number to k kFormatter(getRandomInt(min,max));
function mFormatter(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

function kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
