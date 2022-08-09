import React, { useEffect, useState } from 'react';
import './App.css';
import YellowBackground from './components/YellowBackground/index';
import { UsertTickerInfo } from './components/UserTickerInfo';
import { techs } from './utils/techs';
import Javascript from './components/logos/Javascript';
import { stylesIcons } from './utils/stylesIcons';

function App() {
  const flavour = 'Javascript';
  const FlavourIcon = techs.find(({ tech }) => tech === flavour)?.Icon ?? Javascript;
  const [flavourIc, setFlavourIc] = useState(FlavourIcon);

  const updateCustomProperties = (tech: string) => {
    const { borderColor, backgroundColor, textColor } = stylesIcons[tech] ?? stylesIcons.javascript;

    document.documentElement.style.setProperty('--border-card', borderColor);
    document.documentElement.style.setProperty('--background-card', backgroundColor);
    document.documentElement.style.setProperty('--text-card', textColor);
  };

  const handleClickTecnologies = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    const currentActive = currentTarget.getAttribute('data-tech') ?? '';
    updateCustomProperties(currentActive);
    const newFlavourSelect =
      techs.find(({ tech }) => tech === currentActive)?.Icon ?? Element.arguments;
    setFlavourIc(newFlavourSelect);
  };

  useEffect(() => {
    /* eslint-disable */
	!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Atropos = e() }(this, (function () { "use strict"; function t() { return (t = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var o = arguments[e]; for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]) } return t }).apply(this, arguments) } var e = function (t, e) { return t.querySelector(e) }, o = function (t) { void 0 === t && (t = {}); var e = {}; return Object.keys(t).forEach((function (o) { void 0 !== t[o] && (e[o] = t[o]) })), e }; return function (a) { void 0 === a && (a = {}); var n, r, i, s, c, u, p, l, d, f, v, h = a, m = h.el, y = h.eventsEl, g = { __atropos__: !0, params: t({ alwaysActive: !1, activeOffset: 50, shadowOffset: 50, shadowScale: 1, duration: 300, rotate: !0, rotateTouch: !0, rotateXMax: 15, rotateYMax: 15, rotateXInvert: !1, rotateYInvert: !1, stretchX: 0, stretchY: 0, stretchZ: 0, commonOrigin: !0, shadow: !0, highlight: !0, onEnter: null, onLeave: null, onRotate: null }, o(a || {})), destroyed: !1, isActive: !1 }, M = g.params, x = []; !function t() { v = requestAnimationFrame((function () { x.forEach((function (t) { if ("function" == typeof t) t(); else { var e = t.element, o = t.prop, a = t.value; e.style[o] = a } })), x.splice(0, x.length), t() })) }(); var w, O = function (t, e) { x.push({ element: t, prop: "transitionDuration", value: e }) }, b = function (t, e) { x.push({ element: t, prop: "transitionTimingFunction", value: e }) }, T = function (t, e) { x.push({ element: t, prop: "transform", value: e }) }, X = function (t, e) { x.push({ element: t, prop: "opacity", value: e }) }, Y = function (t, e, o, a) { return t.addEventListener(e, o, a) }, _ = function (t, e, o, a) { return t.removeEventListener(e, o, a) }, L = function (t) { var e = t.rotateXPercentage, o = void 0 === e ? 0 : e, a = t.rotateYPercentage, n = void 0 === a ? 0 : a, r = t.duration, i = t.opacityOnly, s = t.easeOut; (function (t, e) { return t.querySelectorAll(e) })(m, "[data-atropos-offset], [data-atropos-opacity]").forEach((function (t) { O(t, r), b(t, s ? "ease-out" : ""); var e = function (t) { if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity) return t.dataset.atroposOpacity.split(";").map((function (t) { return parseFloat(t) })) }(t); if (0 === o && 0 === n) i || T(t, "translate3d(0, 0, 0)"), e && X(t, e[0]); else { var a = parseFloat(t.dataset.atroposOffset) / 100; if (Number.isNaN(a) || i || T(t, "translate3d(" + -n * -a + "%, " + o * -a + "%, 0)"), e) { var c = e[0], u = e[1], p = Math.max(Math.abs(o), Math.abs(n)); X(t, c + (u - c) * p / 100) } } })) }, A = function (t, e) { var o = m !== y; if (s || (s = m.getBoundingClientRect()), o && !c && (c = y.getBoundingClientRect()), void 0 === t && void 0 === e) { var a = o ? c : s; t = a.left + a.width / 2, e = a.top + a.height / 2 } var r, i = 0, u = 0, l = s, d = l.top, f = l.left, v = l.width, h = l.height; if (o) { var g = c, w = g.top, Y = g.left, _ = g.width, A = g.height, E = v / 2 + (f - Y), R = h / 2 + (d - w), I = t - Y, P = e - w; u = M.rotateYMax * (I - E) / (_ - v / 2) * -1, i = M.rotateXMax * (P - R) / (A - h / 2), r = t - f + "px " + (e - d) + "px" } else { var j = v / 2, D = h / 2, F = t - f, C = e - d; u = M.rotateYMax * (F - j) / (v / 2) * -1, i = M.rotateXMax * (C - D) / (h / 2) } i = Math.min(Math.max(-i, -M.rotateXMax), M.rotateXMax), M.rotateXInvert && (i = -i), u = Math.min(Math.max(-u, -M.rotateYMax), M.rotateYMax), M.rotateYInvert && (u = -u); var S, k, q = i / M.rotateXMax * 100, N = u / M.rotateYMax * 100, B = (o ? N / 100 * M.stretchX : 0) * (M.rotateYInvert ? -1 : 1), Z = (o ? q / 100 * M.stretchY : 0) * (M.rotateXInvert ? -1 : 1), z = o ? Math.max(Math.abs(q), Math.abs(N)) / 100 * M.stretchZ : 0; T(n, "translate3d(" + B + "%, " + -Z + "%, " + -z + "px) rotateX(" + i + "deg) rotateY(" + u + "deg)"), r && M.commonOrigin && (S = n, k = r, x.push({ element: S, prop: "transformOrigin", value: k })), p && (O(p, M.duration + "ms"), b(p, "ease-out"), T(p, "translate3d(" + .25 * -N + "%, " + .25 * q + "%, 0)"), X(p, Math.max(Math.abs(q), Math.abs(N)) / 100)), L({ rotateXPercentage: q, rotateYPercentage: N, duration: M.duration + "ms", easeOut: !0 }), "function" == typeof M.onRotate && M.onRotate(i, u) }, E = function () { x.push((function () { return m.classList.add("atropos-active") })), O(n, M.duration + "ms"), b(n, "ease-out"), T(r, "translate3d(0,0, " + M.activeOffset + "px)"), O(r, M.duration + "ms"), b(r, "ease-out"), u && (O(u, M.duration + "ms"), b(u, "ease-out")), g.isActive = !0 }, R = function (t) { if (l = void 0, !("pointerdown" === t.type && "mouse" === t.pointerType || "pointerenter" === t.type && "mouse" !== t.pointerType)) { if ("pointerdown" === t.type && t.preventDefault(), d = t.clientX, f = t.clientY, M.alwaysActive) return s = void 0, void (c = void 0); E(), "function" == typeof M.onEnter && M.onEnter() } }, I = function (t) { !1 === l && t.cancelable && t.preventDefault() }, P = function (t) { if (M.rotate && g.isActive) { if ("mouse" !== t.pointerType) { if (!M.rotateTouch) return; t.preventDefault() } var e = t.clientX, o = t.clientY, a = e - d, n = o - f; if ("string" == typeof M.rotateTouch && (0 !== a || 0 !== n) && void 0 === l) { if (a * a + n * n >= 25) { var r = 180 * Math.atan2(Math.abs(n), Math.abs(a)) / Math.PI; l = "scroll-y" === M.rotateTouch ? r > 45 : 90 - r > 45 } !1 === l && (m.classList.add("atropos-rotate-touch"), t.cancelable && t.preventDefault()) } "mouse" !== t.pointerType && l || A(e, o) } }, j = function (t) { if (s = void 0, c = void 0, g.isActive && !(t && "pointerup" === t.type && "mouse" === t.pointerType || t && "pointerleave" === t.type && "mouse" !== t.pointerType)) { if ("string" == typeof M.rotateTouch && l && m.classList.remove("atropos-rotate-touch"), M.alwaysActive) return A(), "function" == typeof M.onRotate && M.onRotate(0, 0), void ("function" == typeof M.onLeave && M.onLeave()); x.push((function () { return m.classList.remove("atropos-active") })), O(r, M.duration + "ms"), b(r, ""), T(r, "translate3d(0,0, 0px)"), u && (O(u, M.duration + "ms"), b(u, "")), p && (O(p, M.duration + "ms"), b(p, ""), T(p, "translate3d(0, 0, 0)"), X(p, 0)), O(n, M.duration + "ms"), b(n, ""), T(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"), L({ duration: M.duration + "ms" }), g.isActive = !1, "function" == typeof M.onRotate && M.onRotate(0, 0), "function" == typeof M.onLeave && M.onLeave() } }, D = function (t) { var e = t.target; !y.contains(e) && e !== y && g.isActive && j() }; return g.destroy = function () { g.destroyed = !0, cancelAnimationFrame(v), _(document, "click", D), _(y, "pointerdown", R), _(y, "pointerenter", R), _(y, "pointermove", P), _(y, "touchmove", I), _(y, "pointerleave", j), _(y, "pointerup", j), _(y, "lostpointercapture", j), delete m.__atropos__ }, "string" == typeof m && (m = e(document, m)), m && (m.__atropos__ || (void 0 !== y ? "string" == typeof y && (y = e(document, y)) : y = m, Object.assign(g, { el: m }), n = e(m, ".atropos-rotate"), r = e(m, ".atropos-scale"), i = e(m, ".atropos-inner"), m.__atropos__ = g)), m && y && (M.shadow && ((u = e(m, ".atropos-shadow")) || ((u = document.createElement("span")).classList.add("atropos-shadow"), w = !0), T(u, "translate3d(0,0,-" + M.shadowOffset + "px) scale(" + M.shadowScale + ")"), w && n.appendChild(u)), M.highlight && function () { var t; (p = e(m, ".atropos-highlight")) || ((p = document.createElement("span")).classList.add("atropos-highlight"), t = !0), T(p, "translate3d(0,0,0)"), t && i.appendChild(p) }(), M.rotateTouch && ("string" == typeof M.rotateTouch ? m.classList.add("atropos-rotate-touch-" + M.rotateTouch) : m.classList.add("atropos-rotate-touch")), e(m, "[data-atropos-opacity]") && L({ opacityOnly: !0 }), Y(document, "click", D), Y(y, "pointerdown", R), Y(y, "pointerenter", R), Y(y, "pointermove", P), Y(y, "touchmove", I), Y(y, "pointerleave", j), Y(y, "pointerup", j), Y(y, "lostpointercapture", j), M.alwaysActive && (E(), A())), g } })); /* eslint-enable */
    /* eslint-enable */
    window.Atropos({
      el: '.atropos',
      activeOffset: 120,
      shadowScale: 30
    });
    // package animation

    updateCustomProperties(techs);
  }, []);

  return (
    <YellowBackground>
      <div className="grid place-content-center min-h-[110vh] pt-10 pb-20">
        {/* <Technologies /> */}

        <div className="grid xl:grid-cols-[minmax(900px,_1fr)_250px] m-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <div className="atropos p-8 w-full m-auto sm:w-[480px] md:w-[800px] md:aspect-[1.91:1]">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner transition-all duration-700 relative p-2 border-2 rounded-md shadow-2xl border-[color:var(--border-card)] bg-[color:var(--background-card)] backdrop-blur-sm flex flex-col">
                    <div className="atropos-inner transition-all duration-700 relative p-4 border-4 rounded-md shadow-2xl border-[color:var(--border-card)] bg-[color:var(--background-card)] backdrop-blur-sm flex flex-col">
                      <div className="flex flex-col-reverse justify-between sm:flex-row">
                        <div>
                          <UsertTickerInfo />
                        </div>
                        <div className="flex items-center justify-center pb-2">
                          <h4 className="transition-all duration-700 top-0 right-0 flex flex-col font-mono text-2xl font-bold opacity-90 text-[color:var(--text-card)]">
                            <div className="block text-xs font-black uppercase text-black/90">
                              Ticket number
                            </div>
                            #00001
                          </h4>
                        </div>
                      </div>

                      <h1
                        className="pt-10 m-0 mx-auto font-black leading-none text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black sm:text-[4rem] md:text-7xl"
                        data-atropos-offset="2">
                        #miduConf
                      </h1>

                      <div
                        className="flex items-center justify-center pt-2 sm:pt-4 md:pt-0"
                        data-atropos-offset="5">
                        <h2 className="inline-block w-40 px-3 py-1 text-xs font-bold text-center text-white rounded-full md:w-2/3 md:text-lg bg-black/90">
                          SEPTIEMBRE 13 • Online • 5PM CET
                        </h2>
                      </div>

                      <h3
                        data-atropos-offset="5"
                        className="flex flex-col items-center justify-center pt-6 pb-6 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-500 md:flex-row">
                        <svg className="w-16 h-16 pr-2 text-purple-900" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"></path>
                        </svg>
                        <div className="flex flex-col items-center justify-center leading-none md:items-start">
                          <span className="block -mb-1 text-lg text-black">Streaming en</span>
                          <a
                            href="https://twitch.tv/midudev"
                            rel="noopener noreferrer"
                            target="_blank">
                            twitch.tv/midudev
                          </a>
                        </div>
                      </h3>

                      <div
                        id="card-icon"
                        className="absolute opacity-30 top-20 -left-32 w-96 h-96 -z-10 contrast-200">
                        {flavourIc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full py-4">
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row w-72 sm:w-80 md:flex md:w-full">
                {/* <Button
                  id="share-twitter"
                  openInNewWindow
                  flavour="twitter"
                  text="Compartir en Twitter"
                />
                <Button id="add-to-calendar" flavour="calendar" text="Añadir al Calendario" />
                <Button id="copy-link" flavour="link" text="Copiar enlace" /> */}
              </div>
            </div>
          </div>

          <div
            id="select-flavour"
            className="relative flex flex-col justify-center h-auto p-8 lg:p-0">
            <div className="relative w-full grid-cols-2 p-2 text-lg font-bold text-center text-gray-900 no-underline whitespace-no-wrap align-middle bg-white border-2 border-gray-900 border-solid rounded-md shadow-xs select-none hover:shadow-xs focus:shadow-xs">
              <div className="-z-10 w-full h-full bg-gray-900 ml-0.5 mt-0.5 rounded-lg absolute left-0 top-0"></div>
              <h3 className="text-lg text-center">Elige tu sabor de ticket</h3>
              <ul id="select" className="flex flex-wrap items-center justify-center">
                {techs.map(({ tech, Icon }) => {
                  return (
                    <li key={`id-${tech}`}>
                      <button
                        onClick={handleClickTecnologies}
                        data-tech={tech}
                        className={`button-ticket ${flavour === tech ? 'flavour-selected' : ''}`}
                        style={{ width: '80px' }}>
                        <Icon data="" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </YellowBackground>
  );
}

export default App;
