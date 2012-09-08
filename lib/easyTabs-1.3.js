/*
* Author: Brett Marshall
* Project Name: easyTabs.js
* Project Description: A jQuery plugin for easily creating tabbed content.
* Project Url: easyTabs.brett-marshall.com (Not created yet)
* GitHub Repo: https://github.com/brettmarshall/easyTabs
* Version 1.3 Beta
*/

jQuery.noConflict();

jQuery(document).ready(function($)	{

	$.fn.easyTabs = function(options)	{
	
		// declares the default values for the plugin
		// currently on v1.2 there is only the option to configure the speed
		var defaults= { 'speed': 300 };
		
		// in this plugin, opts is the reference object for the default options
		// using the $.extend() method to connect the defaults to the options paremeter
		var opts = $.extend(defaults, options);
		
		// caching the selected item
		$this = $(this);
				
		// tab refers the the item entered as the selector
		// the plugin assumes the entered selector is the container of the tabs
		var tab = $this.children();
		
		// content refers to the sibling of the tabs container
		// the plugin assumes there is a container containing the tabs and content container
		// it also assumes the only sibling to the tab container, is the content container
		var content = $this.siblings().children();
		
		// hide all of the content items, except for the first item
		content.first().siblings().hide();
		
		// add the class of easyTabs-current to the first tab
		tab.first().addClass('easyTabs-current');
		
		// for each tab, add #easyTabs-content(number) to the href
		// ex: #easyTabs-content0, #easyTabs-content1, #easyTabs-content2...
		tab.each(function(index)	{
			$(this).attr('href', '#' + 'easyTabs-content' + index);
		});
		
		// for each content "block" add an id of easyTabs-content(number)
		// ex: easyTabs-content0, easyTabs-content1, easyTabs-content2...
		content.each(function(index)	{
			$(this).attr('id', 'easyTabs-content' + index);
		});
		
		// return this function, so it can be chained with other methods
		// ie: $('#tabs').easyTabs().css('background-color', 'green');
		return tab.on('click', function()	{
		
			// caching the new meaning of "this"
			// within this scope, $this refers to the tab that has been clicked
			var $this = $(this);
			
			// this gets the index value of the tab that's clicked
			var match = $this.index();
			
			// this grabs the content block that has the same index number as the clicked tab
			var content_match = content.eq(match);
			
			// take all of the content except for the matching content and fade it out
			content_match.siblings().fadeOut(opts.speed / 2, 'swing');				
			
			// take the matching content and fade it in
			content_match.delay(opts.speed / 2).fadeIn(opts.speed / 2, 'swing');
			
			// add the class of "easyTabs-current" to the clicked tab
			$this.addClass('easyTabs-current');
			
			// remove the easyTabs-current class from all the other tabs
			$this.siblings().removeClass('easyTabs-current');
		});
					
	} // End of Plugin
	

}); // End of .ready() function



/* -- Features Currently Under Development
*
* Animation Options ( fade, slide )
*
*/












