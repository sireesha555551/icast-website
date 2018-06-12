$(() => {
  $(".nav .nav-item").click($e => {
    let $navItem = $($e.target);
    let index = $navItem.index();
    let context = $navItem.closest('.container');
    activeTabAt(index , context);
  });

  let activeTabAt = (index , context) => {
    let $navItems = context.find(".nav .nav-item");
    $navItems.removeClass("active");
    let title = $navItems.eq(index).addClass("active").text();
    let $activePanel = context.find(".nav-panel-container .nav-panel");
    let $blocks = $activePanel.children();
    $blocks
      .on("transitionend webkitTransitionEnd", () => {
        $activePanel.remove();
        let $nextPanel = createPanel(title);
        context.find(".nav-panel-container").append($nextPanel);
        context.find(".nav-panel-container")[0].offsetWidth;
        $nextPanel.addClass('active')        
      })
      .addClass("slideOut");
  };

  let createPanel = (title) => {
    let tpl = `
      <div class="nav-panel">
        <div class="block">${title}</div>
      </div>`;
    let $navPanel = $(tpl)
    $navPanel.children().each((index , el )=>{
      $(el).css('transition-delay' , (index * 100)+"ms")
    });
    return $navPanel;
  };
});
