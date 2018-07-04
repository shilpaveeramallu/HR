! function(e, i, s) {
    "use strict";
    s.site.menu = {
        speed: 250,
        accordion: !0,
        init: function() {
            this.$instance = s(".site-menu"), this.bind()
        },
        bind: function() {
            var e = this;
            this.$instance.on("mouseenter.site.menu", ".site-menu-item", function() {
                if (!0 === s.site.menubar.folded && s(this).is(".has-sub")) {
                    var i = s(this).children(".site-menu-sub");
                    e.position(s(this), i)
                }
                s(this).addClass("hover")
            }).on("mouseleave.site.menu", ".site-menu-item", function() {
                s(this).removeClass("hover")
            }).on("deactive.site.menu", ".site-menu-item.active", function(e) {
                s(this).removeClass("active"), e.stopPropagation()
            }).on("active.site.menu", ".site-menu-item", function(e) {
                s(this).addClass("active"), e.stopPropagation()
            }).on("open.site.menu", ".site-menu-item", function(i) {
                var t = s(this);
                e.expand(t, function() {
                    t.addClass("open")
                }), e.accordion && t.siblings(".open").trigger("close.site.menu"), i.stopPropagation()
            }).on("close.site.menu", ".site-menu-item.open", function(i) {
                var t = s(this);
                e.collapse(t, function() {
                    t.removeClass("open")
                }), i.stopPropagation()
            }).on("click.site.menu", ".site-menu-item", function(e) {
                s(this).is(".has-sub") ? (e.preventDefault(), s(this).is(".open") ? s(this).trigger("close.site.menu") : s(this).trigger("open.site.menu")) : s(this).is(".active") || (s(this).siblings(".active").trigger("deactive.site.menu"), s(this).trigger("active.site.menu")), e.stopPropagation()
            })
        },
        collapse: function(e, i) {
            var t = this;
            e.children(".site-menu-sub").show().slideUp(this.speed, function() {
                s(this).css("display", ""), s(this).find("> .site-menu-item").removeClass("is-shown"), i && i(), t.$instance.trigger("collapsed.site.menu")
            })
        },
        expand: function(e, i) {
            var t = this,
                n = e.children(".site-menu-sub"),
                o = n.children(".site-menu-item").addClass("is-hidden");
            n.hide().slideDown(this.speed, function() {
                s(this).css("display", ""), i && i(), t.$instance.trigger("expanded.site.menu")
            }), setTimeout(function() {
                o.addClass("is-shown"), o.removeClass("is-hidden")
            }, 0)
        },
        refresh: function() {
            this.$instance.find(".open").removeClass("open")
        },
        position: function(e, i) {
            var t = e.position().top,
                n = i.outerHeight(),
                o = s(".site-menubar").outerHeight();
            t + n > o && t > o / 2 ? i.addClass("site-menu-sub-up") : i.removeClass("site-menu-sub-up")
        }
    }
}(window, document, jQuery);