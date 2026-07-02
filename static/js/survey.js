(function () {
  var taxonomy = [
    {
      key: "stack",
      label: "Autonomy Stack",
      kicker: "Context",
      title: "Motion planning is the bridge between task intent and executable robot motion.",
      text: "The survey positions motion planning inside the manipulation autonomy stack, where perception, language, task planning, inverse kinematics, motion planning, and control must work together.",
      image: "./static/images/02. AutonomyStack.png",
      caption: "A toy manipulation autonomy stack showing where motion planning fits.",
      tags: ["task planning", "IK", "motion planning", "control"]
    },
    {
      key: "prelim",
      label: "Planning Preliminaries",
      kicker: "Foundations",
      title: "Workspace geometry and configuration-space feasibility are not the same problem.",
      text: "The paper introduces workspace versus configuration space, path feasibility, planning cost, success rate, clearance, smoothness, and other metrics used to compare planners.",
      image: "./static/images/03. PlanningDef.png",
      caption: "Workspace and configuration-space views for a planar manipulator.",
      tags: ["workspace", "configuration space", "metrics", "feasibility"]
    },
    {
      key: "sampling",
      label: "Sampling-Based",
      kicker: "Classical Planning",
      title: "Sampling, steering, and collision checking define the core planning loop.",
      text: "Sampling-based planners explore the configuration space by repeatedly drawing samples, steering toward them, and validating edges. Neural methods can improve each primitive.",
      image: "./static/images/04. SamplingPrimitives.png",
      caption: "The three primitives of sampling-based planning algorithms.",
      tags: ["sampling", "steering", "collision checking", "RRT"]
    },
    {
      key: "optimization",
      label: "Optimization",
      kicker: "Classical Planning",
      title: "Trajectory optimization is powerful, but warm starts matter.",
      text: "Optimization-based planners refine a candidate trajectory under smoothness, goal, and obstacle constraints. Neural networks can provide warm starts or learn cost/constraint proxies.",
      image: "./static/images/05. OptimizationBased.png",
      caption: "Different initial trajectories can lead to different optimized solutions.",
      tags: ["warm start", "trajectory optimization", "constraints", "cost"]
    },
    {
      key: "collision",
      label: "Collision",
      kicker: "Safety Primitive",
      title: "Collision checking is often the expensive inner loop.",
      text: "The survey covers geometric collision checking, spatial decomposition, learned distance fields, neural SDFs, and proxy collision checkers for accelerating feasibility queries.",
      image: "./static/images/06. CollisionChecking.png",
      caption: "Common collision checking practices for manipulators and environments.",
      tags: ["distance", "SDF", "occupancy", "proximity"]
    },
    {
      key: "learning",
      label: "Neural Modules",
      kicker: "Learning Toolkit",
      title: "Deep learning changes what planners can amortize.",
      text: "MLPs, CNNs, RNNs, transformers, GNNs, point cloud networks, generative models, and neural fields have been used to encode scenes, generate samples, model trajectories, and query safety.",
      image: "./static/images/08. MLP-CNN-RRN-GNN.png",
      caption: "Core neural model families and their planning applications.",
      tags: ["MLP", "CNN", "Transformer", "GNN", "PCNet"]
    },
    {
      key: "generative",
      label: "Generative",
      kicker: "Multimodal Planning",
      title: "Generative models are natural tools for multimodal motion distributions.",
      text: "VAEs, GANs, normalizing flows, diffusion models, and flow matching can generate diverse samples or trajectories, but deployment requires validation and robust generalization.",
      image: "./static/images/DGM.png",
      caption: "Deep generative model families covered by the survey.",
      tags: ["VAE", "GAN", "flow", "diffusion", "flow matching"]
    }
  ];

  var modules = [
    ["MLPs", "Compact function approximators for steering, collision proxies, trajectory costs, and optimization warm starts."],
    ["CNNs", "Image or voxel-based scene encoders for end-to-end planning and collision checking."],
    ["Transformers", "Sequence and set models for trajectories, planning context, and tokenized scene representations."],
    ["GNNs", "Relational inductive bias for robot kinematics, planning graphs, and structured collision reasoning."],
    ["Point Cloud Networks", "Direct geometry encoders for robot and workspace observations without dense voxelization."],
    ["Generative Models", "VAE, GAN, flow, diffusion, and flow matching models for multimodal samples or trajectories."]
  ];

  var README_URL = "https://raw.githubusercontent.com/DavoodSZ1993/DeepLearning-MotionPlanning-Manipulators/main/README.md";
  var fallbackMarkdown = [
    "## End-to-end Planning",
    "- PCNets: **Motion policy networks**, 2023, [Paper Link](https://proceedings.mlr.press/v205/fishman23a/fishman23a.pdf).",
    "- PCNets: **Neural mp: A generalist neural motion planner**, 2024,[Paper Link](https://arxiv.org/abs/2409.05864).",
    "## Sampling-based Motion Planning",
    "### Sampling Primitive",
    "- MLPs: **Motion planning networks**, 2019, [Paper Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8793889).",
    "- GNNs: **SIMPNet: Spatial-Informed Motion Planning Network**, 2024, [Paper Link](https://arxiv.org/pdf/2408.12831).",
    "### Steering Primitive",
    "- MLPs: **Fast deep swept volume estimator**, 2021, [Paper Link](https://journals.sagepub.com/doi/pdf/10.1177/0278364920940781).",
    "## Constrained Sampling-based Motion Planning",
    "- MLPs: **Learning equality constraints for motion planning on manifolds**, 2021, [Paper Link](https://proceedings.mlr.press/v155/sutanto21a/sutanto21a.pdf).",
    "## Trajectory Optimization",
    "- DGMs - DMs: **Motion planning diffusion: Learning and planning of robot motions with diffusion models**, 2023, [Paper Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10342382).",
    "## Collision Checking",
    "- GNNs: **GraphDistNet: A graph-based collision-distance estimator for gradient-based trajectory optimization**, 2022, [Paper Link](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9851942)."
  ].join("\n");

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text) node.textContent = text;
    return node;
  }

  function mountTaxonomy() {
    var tabs = document.getElementById("taxonomy-tabs");
    if (!tabs) return;

    var kicker = document.getElementById("taxonomy-kicker");
    var title = document.getElementById("taxonomy-title");
    var text = document.getElementById("taxonomy-text");
    var image = document.getElementById("taxonomy-image");
    var caption = document.getElementById("taxonomy-caption");
    var tagList = document.getElementById("taxonomy-tags");

    function render(item, activeButton) {
      tabs.querySelectorAll(".taxonomy-tab").forEach(function (btn) { btn.classList.remove("active"); });
      if (activeButton) activeButton.classList.add("active");
      kicker.textContent = item.kicker;
      title.textContent = item.title;
      text.textContent = item.text;
      image.src = item.image;
      image.alt = item.label;
      caption.textContent = item.caption;
      tagList.innerHTML = "";
      item.tags.forEach(function (tag) { tagList.appendChild(el("span", "", tag)); });
    }

    taxonomy.forEach(function (item, idx) {
      var btn = el("button", "taxonomy-tab" + (idx === 0 ? " active" : ""), item.label);
      btn.type = "button";
      btn.addEventListener("click", function () { render(item, btn); });
      tabs.appendChild(btn);
      if (idx === 0) render(item, btn);
    });
  }

  function mountModules() {
    var grid = document.getElementById("module-grid");
    if (!grid) return;
    modules.forEach(function (item) {
      var card = el("div", "module-item");
      card.appendChild(el("strong", "", item[0]));
      card.appendChild(el("p", "", item[1]));
      grid.appendChild(card);
    });
  }

  function parsePaperMarkdown(markdown) {
    var start = markdown.indexOf("## End-to-end Planning");
    var end = markdown.indexOf("# Acknowledgement");
    var body = markdown.slice(start > -1 ? start : 0, end > -1 ? end : markdown.length);
    var tree = [];
    var currentSection = null;
    var currentSubsection = null;

    function ensureSubsection(section, title) {
      var key = title || "Papers";
      var found = section.children.find(function (child) { return child.title === key; });
      if (!found) {
        found = { title: key, papers: [] };
        section.children.push(found);
      }
      return found;
    }

    body.split(/\r?\n/).forEach(function (line) {
      var sectionMatch = line.match(/^##\s+(.+)/);
      var subsectionMatch = line.match(/^###\s+(.+)/);
      var paperMatch = line.match(/^-\s*([^:]+):\s*\*\*(.*?)\*\*,?\s*(.*?)(?:,?\s*\[Paper\s*Link\]\((.*?)\)|,?\s*\[PaperLink\]\((.*?)\)|\.\s*\[Paper\s*Link\]\((.*?)\))/);
      if (sectionMatch) {
        currentSection = { title: sectionMatch[1].trim(), children: [] };
        tree.push(currentSection);
        currentSubsection = null;
      } else if (subsectionMatch && currentSection) {
        currentSubsection = ensureSubsection(currentSection, subsectionMatch[1].trim());
      } else if (paperMatch && currentSection) {
        var venueYear = paperMatch[3].replace(/\s+/g, " ").replace(/,$/, "").trim();
        var yearMatch = venueYear.match(/\b(19|20)\d{2}\b/);
        var paper = {
          family: paperMatch[1].trim(),
          title: paperMatch[2].trim(),
          year: yearMatch ? yearMatch[0] : "",
          meta: venueYear,
          link: paperMatch[4] || paperMatch[5] || paperMatch[6] || ""
        };
        ensureSubsection(currentSection, currentSubsection ? currentSubsection.title : "Papers").papers.push(paper);
      }
    });
    return tree;
  }

  function countPapers(tree) {
    return tree.reduce(function (sum, section) {
      return sum + section.children.reduce(function (inner, child) { return inner + child.papers.length; }, 0);
    }, 0);
  }

  function paperMatches(paper, section, child, query) {
    var text = [paper.title, paper.family, paper.year, paper.meta, section.title, child.title].join(" ").toLowerCase();
    return text.indexOf(query) !== -1;
  }

  function mountPapers() {
    var treeRoot = document.getElementById("paper-tree");
    var summary = document.getElementById("paper-tree-summary");
    var search = document.getElementById("paper-search");
    var filters = document.querySelectorAll(".paper-filter");
    var expand = document.getElementById("expand-tree");
    var collapse = document.getElementById("collapse-tree");
    if (!treeRoot || !summary || !search) return;
    var current = "all";
    var paperTree = [];

    function renderTree() {
      var query = search.value.trim().toLowerCase();
      treeRoot.innerHTML = "";
      var visibleCount = 0;

      paperTree.forEach(function (section) {
        if (current !== "all" && section.title !== current) return;
        var sectionDetails = el("details", "tree-section");
        sectionDetails.open = query || current !== "all";
        var sectionCount = section.children.reduce(function (sum, child) { return sum + child.papers.length; }, 0);
        sectionDetails.appendChild(el("summary", "", section.title + " (" + sectionCount + ")"));

        section.children.forEach(function (child) {
          var papers = child.papers.filter(function (paper) {
            return !query || paperMatches(paper, section, child, query);
          });
          if (!papers.length) return;
          visibleCount += papers.length;

          var childDetails = el("details", "tree-subsection");
          childDetails.open = query || child.papers.length < 8;
          childDetails.appendChild(el("summary", "", child.title + " (" + papers.length + ")"));

          var list = el("div", "tree-paper-list");
          papers.forEach(function (paper) {
            var row = el("article", "tree-paper");
            var title = paper.link ? el("a", "tree-paper-title", paper.title) : el("span", "tree-paper-title", paper.title);
            if (paper.link) {
              title.href = paper.link;
              title.target = "_blank";
              title.rel = "noopener";
            }
            row.appendChild(title);
            var meta = el("div", "tree-paper-meta");
            meta.appendChild(el("span", "paper-tag", paper.family));
            if (paper.year) meta.appendChild(el("span", "paper-tag", paper.year));
            row.appendChild(meta);
            list.appendChild(row);
          });
          childDetails.appendChild(list);
          sectionDetails.appendChild(childDetails);
        });

        if (sectionDetails.querySelector(".tree-paper")) treeRoot.appendChild(sectionDetails);
      });

      summary.textContent = visibleCount
        ? "Showing " + visibleCount + " reviewed papers from " + countPapers(paperTree) + " total."
        : "No papers match the current search/filter.";
    }

    function loadTree() {
      fetch(README_URL)
        .then(function (response) {
          if (!response.ok) throw new Error("README fetch failed");
          return response.text();
        })
        .catch(function () { return fallbackMarkdown; })
        .then(function (markdown) {
          paperTree = parsePaperMarkdown(markdown);
          renderTree();
        });
    }

    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filters.forEach(function (el) { el.classList.remove("active"); });
        btn.classList.add("active");
        current = btn.getAttribute("data-filter");
        renderTree();
      });
    });
    search.addEventListener("input", renderTree);
    if (expand) expand.addEventListener("click", function () {
      treeRoot.querySelectorAll("details").forEach(function (detail) { detail.open = true; });
    });
    if (collapse) collapse.addEventListener("click", function () {
      treeRoot.querySelectorAll("details").forEach(function (detail) { detail.open = false; });
    });
    loadTree();
  }

  document.addEventListener("DOMContentLoaded", function () {
    mountTaxonomy();
    mountModules();
    mountPapers();
  });
})();
