'use strict';
/**
 * Opening Pathways API server
 * 
 * About page Model
 * @module about
 * @class about
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = global.keystone;
var Types = keystone.Field.Types;

/**
 * about model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var About = new keystone.List('About', 
	{
		label: 'About',
		singular: 'About',
		nodelete: true,
		nocreate: true
	});

/**
 * Model Fields
 * @main About
 */
About.add({
	
	name: { type: String, default: "About", hidden: true, required: true, initial: true },
	image: { type: Types.CloudinaryImage, folder: 'engagement-journalism/cms', autoCleanup: true, required: true, initial: true},
	para1: { type: Types.Markdown, label: 'Paragraph 1', required: true, initial: true},
	para2: { type: Types.Markdown, label: 'Paragraph 2', required: true, initial: true},
	caseStudiesIntro: { type: Types.Markdown, required: true, initial: true}

});

/**
 * Model Registration
 */
About.defaultSort = '-createdAt';
About.defaultColumns = 'name';
About.register();
