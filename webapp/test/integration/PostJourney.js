/*global QUnit*/

sap.ui.require(
	["sap/ui/test/opaQunit"],
	function (opaTest) {
		"use strict";

		QUnit.module("Post");

		opaTest("Should see the post page when a user clicks on an entry of the list", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			//Actions
			When.onTheWorklistPage.iPressOnTheItemWithTheID("PostID_15");

			// Assertions
			Then.onThePostPage.theTitleShouldDisplayTheName("Jeans");
		});

		opaTest("Should go back to the TablePage", function (Given, When, Then) { 
			
			// Actions
			When.onThePostPage.iPressTheBackButton();

			// Assertions
			Then.onTheWorklistPage.iShouldSeeTheTable();
		});

		opaTest("Should see the post page when a user changed hash to a post", function (Given, When, Then) { 

			//Actions
			When.onTheWorklistPage.iChangedHashToThePost("PostID_23");

			// Assertions
			Then.onThePostPage.theTitleShouldDisplayTheName("Cheap Boat");
		});
		
		opaTest("Should go back to the TablePage", function (Given, When, Then) { 
			
			// Actions
			When.onThePostPage.iPressTheBackButton();

			// Assertions
			Then.onTheWorklistPage.iShouldSeeTheTable();
		});
		
		opaTest("Should be on the post page again when browser forwards is pressed", function (Given, When, Then) {
			// Actions
			When.onTheBrowser.iPressOnTheForwardButton();

			// Assertions
			Then.onThePostPage.theTitleShouldDisplayTheName("Cheap Boat").and.iTeardownMyAppFrame();
		});

	}
);