// переключение табов

function tabToggle() {
	var tabWrap = $('.tabs');
	
	tabWrap.each(function() {
		var self = $(this);
		var tabLinks = self.find('.tab-bar').first().find('.tab-bar__item > .tab-bar__link');
		var tabsContentItems = self.find('.tabs-content').first().find('.tabs-content__item');
		
		tabLinks.click(function(e) {

			e.preventDefault();
			var that = $(this);
			var tab = that.closest('.tab-bar__item');
			var index = tab.index();
			
			tab
				.addClass('tab-bar__item_active')
				.siblings()
				.removeClass('tab-bar__item_active');
			
			tabsContentItems
				.eq(index)
				.addClass('tabs-content__item_active')
				.siblings()
				.removeClass('tabs-content__item_active');
		});

	})
}




// события при загрузке DOM

$(function() {
	tabToggle();
})